import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ProfileHeader = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState({
    full_name: "",
    email: "",
    profileImageUrl: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user?.id) {
        const docRef = doc(db, "users", user.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched Profile Data:", data); // Debugging log
          setProfileData({
            full_name: `${data.first_name} ${data.last_name}`,
            email: data.email,
            profileImageUrl: data.profileImageUrl, // Ensure this matches the field in Firestore
          });
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchProfileData();
  }, [user?.id]);

  return (
    <View className="flex items-center justify-center">
      <Image
        source={{
          uri: profileData.profileImageUrl || "https://via.placeholder.com/150",
        }}
        className="h-[112px] w-[112px] rounded-full"
      />
      <View className="flex pt-1 items-center justify-center">
        <Text className="font-JakartaBold text-[22px] text-[#1e1e1e]">
          {profileData.full_name}
        </Text>
        <Text className="font-Jakarta text-[#9b9a9a] text-[13px]">
          {profileData.email}
        </Text>
      </View>
      <View className="bg-[#FEC300] px-2 py-1 mt-5 rounded-full">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(docs)/profiledata");
          }}
        >
          <Text className="text-[12px] text-[#1e1e1e]">Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
