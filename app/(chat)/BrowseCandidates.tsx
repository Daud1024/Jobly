import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import { db } from "@/firebaseConfig"; // Adjust the import path accordingly
import UserCard from "@/components/UserCard";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  DocumentData,
  Query,
  CollectionReference,
} from "firebase/firestore";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";
import { images } from "@/constants"; // Assuming you have an images object containing the image paths
import { useUser } from "@clerk/clerk-expo";

interface User {
  id: string;
  name: string;
  profession: string;
  qualification: string;
  profileImageUrl?: string;
}

const BrowseCandidates: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [profession, setProfession] = useState<string>("");
  const { user } = useUser();
  const currentUserId = user?.id;

  useEffect(() => {
    const fetchUsers = async () => {
      let colRef: CollectionReference<DocumentData> = collection(db, "users");
      let q: Query<DocumentData> = colRef;

      if (profession) {
        q = query(colRef, where("profession", "==", profession));
      }

      const querySnapshot = await getDocs(q);
      const usersList = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Omit<User, "name"> & {
          first_name: string;
          last_name: string;
        };
        return {
          id: doc.id,
          name: `${data.first_name} ${data.last_name}`, // Concatenate first_name and last_name
          profileImageUrl:
            data.profileImageUrl || "https://via.placeholder.com/150",
          profession: data.profession,
          qualification: data.qualification,
        };
      });
      setUsers(usersList);
    };

    fetchUsers();
  }, [profession]);

  const startChat = async (selectedUserId: string) => {
    if (!currentUserId) return;

    console.log(`Attempting to start chat with user: ${selectedUserId}`);

    // Check if a chat already exists
    const existingChatQuery = query(
      collection(db, "chats"),
      where("members", "array-contains", currentUserId)
    );

    const querySnapshot = await getDocs(existingChatQuery);
    let chatId;

    querySnapshot.forEach((doc) => {
      const chat = doc.data();
      if (chat.members.includes(selectedUserId)) {
        chatId = doc.id;
      }
    });

    console.log(`Existing chatId: ${chatId}`);

    // If chat does not exist, create one
    if (!chatId) {
      const chatDocRef = await addDoc(collection(db, "chats"), {
        members: [currentUserId, selectedUserId],
        createdAt: new Date(),
      });
      chatId = chatDocRef.id;
      console.log(`Created new chat with chatId: ${chatId}`);
    }

    // Navigate to the chat screen with the chatId using router.push
    console.log(`Navigating to chat with chatId: ${chatId}`);
    router.push({
      pathname: "/(chat)/mainchat",
      params: { chatId },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.signUpCar} // Adjust the image source accordingly
            style={{ zIndex: 0, width: "100%", height: "100%" }}
          />
          <TouchableOpacity
            onPress={() => {
              router.replace("/(tabs)/chat");
            }}
            className="absolute top-10 left-5 bg-white p-2 rounded-full shadow-md"
          >
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View className="absolute bottom-5 left-7 flex-row items-center space-x-2">
            <Image
              source={images.airbnb} // Adjust the image source accordingly
              className="h-[50px] w-[50px] rounded-full"
            />
            <Text className="text-2xl text-black font-JakartaSemiBold">
              Browse Candidates
            </Text>
          </View>
        </View>
        <View className="flex-1 p-4">
          <TextInput
            placeholder="Search by profession..."
            value={profession}
            onChangeText={setProfession}
            className="p-3 bg-gray-200 rounded-full mb-4"
          />
          <ScrollView>
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onPress={() => startChat(user.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BrowseCandidates;
