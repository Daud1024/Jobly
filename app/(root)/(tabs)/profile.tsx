import ProfileHeader from "@/components/ProfileHeader";
import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { router } from "expo-router";

const Profile = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    gender: "",
    location: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user?.id) {
        const docRef = doc(db, "users", user.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfileData({
            full_name: `${data.first_name} ${data.last_name}`,
            email: data.email,
            contact_number: data.contact_number,
            gender: data.gender,
            location: data.location,
          });
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchProfileData();
  }, [user?.id]);

  return (
    <ScrollView>
      <SafeAreaView>
        <View className="flex px-5 pt-10 items-center justify-center">
          <ProfileHeader />
        </View>
        <View>
          <View className="flex-row justify-between items-center px-5 mt-6">
            <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">
              My Resume
            </Text>
          </View>
          <View>
            <TouchableOpacity
              className="flex p-3 bg-white rounded-lg mx-5 mt-5"
              onPress={() => {
                router.replace("/(docs)/resumedoc");
              }}
            >
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-semibold text-[#1e1e1e]">
                    Front-End Developer
                  </Text>
                  <Text className="text-[11px] text-[#9b9a9a]">
                    Last updated 18.11.2023
                  </Text>
                </View>
                <View>
                  <Text className="text-[12px]">View / Download</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="flex p-3 bg-white rounded-lg mx-5 mt-5">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-semibold text-[#1e1e1e]">
                    Front-End Developer
                  </Text>
                  <Text className="text-[11px] text-[#9b9a9a]">
                    Add, remove, or update your information
                  </Text>
                </View>
                <View>
                  <Text className="text-[12px]">Edit</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View className="flex-row justify-between items-center px-5 mt-6">
            <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">
              My Details
            </Text>
          </View>
          <View>
            <TouchableOpacity className="flex p-3 bg-white rounded-lg mx-5 mt-5">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-semibold text-[#1e1e1e]">
                    Full Name
                  </Text>
                </View>
                <View className="flex flex-row items-center space-x-3 justify-between">
                  <Text className="text-[11px] text-[#9b9a9a]">
                    {profileData.full_name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-3 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-semibold text-[#1e1e1e]">
                    Email
                  </Text>
                </View>
                <View className="flex flex-row items-center space-x-3 justify-between">
                  <Text className="text-[11px] text-[#9b9a9a]">
                    {profileData.email}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-3 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-semibold text-[#1e1e1e]">
                    Contact Number
                  </Text>
                </View>
                <View className="flex flex-row items-center space-x-3 justify-between">
                  <Text className="text-[11px] text-[#9b9a9a]">
                    {profileData.contact_number}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-3 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-semibold text-[#1e1e1e]">
                    Gender
                  </Text>
                </View>
                <View className="flex flex-row items-center space-x-3 justify-between">
                  <Text className="text-[11px] text-[#9b9a9a]">
                    {profileData.gender}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-3 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-semibold text-[#1e1e1e]">
                    Location
                  </Text>
                </View>
                <View className="flex flex-row items-center space-x-3 justify-between">
                  <Text className="text-[11px] text-[#9b9a9a]">
                    {profileData.location}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;
