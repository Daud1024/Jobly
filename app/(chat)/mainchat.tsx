import React, { useState, useEffect } from "react";
import ChatMessage from "@/components/ChatMessage";
import { images } from "@/constants";
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { router } from "expo-router";
import { db } from "@/firebaseConfig"; // Adjust the import path accordingly
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";
import { RootStackParamList } from "@/navigationTypes"; // Import the navigation types
import { Message } from "@/types/type"; // Import the Message interface

type MainChatRouteProp = RouteProp<RootStackParamList, "mainchat">;

const MainChat = () => {
  const navigation = useNavigation();
  const route = useRoute<MainChatRouteProp>(); // Correctly use useRoute hook
  const { chatId } = route.params;
  const { user } = useUser();
  const currentUserId = user?.id;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(db, "chats", chatId, "messages"), {
        text: newMessage,
        senderId: currentUserId,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    }
  };

  const getMessageTimestamp = (message: Message) => {
    if (message.timestamp && message.timestamp.seconds) {
      return new Date(message.timestamp.seconds * 1000).toLocaleTimeString();
    }
    return "Unknown time";
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView className="flex-1">
        <View className="relative w-full h-64">
          <Image source={images.signUpCar} className="absolute w-full h-full" />
          <TouchableOpacity
            onPress={() => {
              router.replace("/(tabs)/chat");
            }}
            className="absolute top-10 left-5 bg-white p-2 rounded-full shadow-md"
          >
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View className="absolute bottom-5 left-7 flex-row items-center">
            <Image source={images.airbnb} className="h-12 w-12 rounded-full" />
            <Text className="text-2xl text-black font-semibold ml-3">
              Airbnb
            </Text>
          </View>
        </View>
        <View className="flex-1 p-2">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isOutgoing={message.senderId === currentUserId}
              timestamp={getMessageTimestamp(message)}
              profileImageUrl={
                message.senderId === currentUserId
                  ? user?.imageUrl || "https://via.placeholder.com/150"
                  : "https://example.com/incoming.jpg"
              } // Replace with the correct profile image URL
            />
          ))}
        </View>
        <View className="flex-row items-center mx-2 mb-3 rounded-full shadow-md bg-white p-2">
          <TextInput
            placeholder="Type your message..."
            value={newMessage}
            onChangeText={setNewMessage}
            className="flex-1 p-3 bg-gray-200 rounded-full"
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            className="ml-2 p-3 bg-yellow-500 rounded-full"
          >
            <Icon name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default MainChat;
