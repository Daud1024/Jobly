import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const ResumeDoc = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white">
        <View className="relative w-full h-64">
          <Image source={images.signUpCar} className="absolute w-full h-full" />
          <Text className="text-3xl text-black font-semibold absolute bottom-6 left-7">
            Sazi Sokanyile
          </Text>
          <Text className="absolute text-base left-8 bottom-1">
            Fullstack Developer
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-bold pb-2 text-xl">About me</Text>
          <Text className="text-base">
            Below you will find Jobly’s information about our cookie and privacy
            policies. We know we are giving a great deal of information. Jobly
            does this for a reason: we want you to have as much knowledge about
            what we do for you at Jobly as is possible. We do not want you to
            wonder about any of our processes or procedures or guess as to what
            your interaction with Jobly means. We want you to understand it,
            which is why we must explain it in detail. We urge you to read these
            terms or any section of interest to you. You are agreeing to proceed
            under them.
          </Text>
        </View>
        <View className="p-7 mb-[-7%]">
          <Text className="font-bold text-xl">Educational Background</Text>
          <Text className="text-base">Last Updated: November 16, 2024</Text>
        </View>
        <View className="p-7 mb-[-7%]">
          <Text className="font-bold text-xl">Work History</Text>
          <Text className="text-base">Last Updated: November 16, 2024</Text>
        </View>
        <View className="p-7 mb-[-7%]">
          <Text className="font-bold text-xl">
            Certifications & Accreditations
          </Text>
          <Text className="text-base">Last Updated: November 16, 2024</Text>
        </View>
        <View className="p-7">
          <Text className="font-bold text-xl">Applicable Skills</Text>
          <Text className="text-base">Last Updated: November 16, 2024</Text>
        </View>
        <View className="p-7">
          <Text className="font-bold text-xl pb-2">
            Previous Work Description
          </Text>
          <Text className="text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product.
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-bold text-xl pb-2">Qualification Summary</Text>
          <Text className="text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product.
          </Text>
        </View>
        <View className="p-7 mb-[-7%]">
          <Text className="font-bold text-xl">Languages</Text>
          <Text className="text-base">English, Spanish, Arabic</Text>
        </View>
        <View className="p-7 mb-[-7%]">
          <Text className="font-bold text-xl">Date of Birth</Text>
          <Text className="text-base">01 December 1990</Text>
        </View>
        <View className="p-7 ">
          <Text className="font-bold text-xl">Gender</Text>
          <Text className="text-base">Male</Text>
        </View>
        <View className="p-7 mb-[-7%]">
          <Text className="font-bold text-xl">Contact Details</Text>
          <Text className="text-base">Location: Durban, South Africa</Text>
          <Text className="text-base">Email: sazi@thepitchdot.co.za</Text>
          <Text className="text-base">Contact Number: 0312344321</Text>
        </View>
        <View className="p-7 mb-[-7%]">
          <Text className="font-bold text-xl">Socials</Text>
          <Text className="text-base">
            Linkedin: http//:www.linkedin.com/sazi
          </Text>
        </View>
        <View className="p-7 mb-[80%]">
          <Text className="font-bold text-xl">References</Text>
          <Text className="text-base">Shaheen Moosa - 0789876890</Text>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 w-full mb-4 p-4 bg-white">
        <CustomButton title="Download" />
        <CustomButton
          title="Close"
          className="bg-gray-800 mt-4"
          onPress={() => {
            router.replace("/(tabs)/profile");
          }}
        />
      </View>
    </View>
  );
};

export default ResumeDoc;
