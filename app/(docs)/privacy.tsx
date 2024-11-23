import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const privacy = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.signUpCar}
            style={{ zIndex: 0, width: "100%", height: 250 }}
          />
          <Text className="text-3xl text-black font-JakartaSemiBold absolute bottom-5 left-7">
            Privacy Policy
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-Jakarta text-base">
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
        <View className="p-7">
          <Text className="font-JakartaBold text-xl">
            Jobly Privacy and Cookie Policy
          </Text>
          <Text className="font-Jakarta text-base">
            Last Updated: November 16, 2024
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-JakartaBold text-xl pb-2">
            Introduction to Jobly's Terms of Service
          </Text>
          <Text className="font-Jakarta text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product, program and element (including e-mail messages,
            notifications, and other messages) provided by or on behalf of Jobly
            on or in connection with such services or websites (collectively,
            the “Site”), including any products, programs, and services
            described in these Terms of Service, (a) you represent that you have
            read and understand the Cookie Policy and Privacy Policy; and (b)
            you are agreeing to the terms and conditions of these Terms of
            Service (the “Agreement”) then in effect with the following entity
            or entities:
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-JakartaBold text-xl pb-2">
            1. For Job Seekers
          </Text>
          <Text className="font-Jakarta text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product, program and element (including e-mail messages,
            notifications, and other messages) provided by or on behalf of Jobly
            on or in connection with such services or websites (collectively,
            the “Site”), including any products, programs, and services
            described in these Terms of Service, (a) you represent that you have
            read and understand the Cookie Policy and Privacy Policy; and (b)
            you are agreeing to the terms and conditions of these Terms of
            Service (the “Agreement”) then in effect with the following entity
            or entities:
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-JakartaBold text-xl pb-2">
            2. For Employees
          </Text>
          <Text className="font-Jakarta text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product, program and element (including e-mail messages,
            notifications, and other messages) provided by or on behalf of Jobly
            on or in connection with such services or websites (collectively,
            the “Site”), including any products, programs, and services
            described in these Terms of Service, (a) you represent that you have
            read and understand the Cookie Policy and Privacy Policy; and (b)
            you are agreeing to the terms and conditions of these Terms of
            Service (the “Agreement”) then in effect with the following entity
            or entities:
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-JakartaBold text-xl pb-2">
            3. Resume and Profile
          </Text>
          <Text className="font-Jakarta text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product, program and element (including e-mail messages,
            notifications, and other messages) provided by or on behalf of Jobly
            on or in connection with such services or websites (collectively,
            the “Site”), including any products, programs, and services
            described in these Terms of Service, (a) you represent that you have
            read and understand the Cookie Policy and Privacy Policy; and (b)
            you are agreeing to the terms and conditions of these Terms of
            Service (the “Agreement”) then in effect with the following entity
            or entities:
          </Text>
        </View>
        <View className="p-7">
          <Text className="font-JakartaBold text-xl pb-2">
            4. Applying to Jobs Through the Site
          </Text>
          <Text className="font-Jakarta text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product, program and element (including e-mail messages,
            notifications, and other messages) provided by or on behalf of Jobly
            on or in connection with such services or websites (collectively,
            the “Site”), including any products, programs, and services
            described in these Terms of Service, (a) you represent that you have
            read and understand the Cookie Policy and Privacy Policy; and (b)
            you are agreeing to the terms and conditions of these Terms of
            Service (the “Agreement”) then in effect with the following entity
            or entities:
          </Text>
        </View>
        <View className="p-7  mb-[10%]">
          <Text className="font-JakartaBold text-xl pb-2">
            4. For Publishers and Advertisers
          </Text>
          <Text className="font-Jakarta text-base">
            Each time you access or use Jobly’s online and/or mobile services
            and websites, including any Jobly mobile application and browser
            extension or plugin, regardless of where it is downloaded from
            (collectively, the “Jobly Apps”), and any software, service,
            feature, product, program and element (including e-mail messages,
            notifications, and other messages) provided by or on behalf of Jobly
            on or in connection with such services or websites (collectively,
            the “Site”), including any products, programs, and services
            described in these Terms of Service, (a) you represent that you have
            read and understand the Cookie Policy and Privacy Policy; and (b)
            you are agreeing to the terms and conditions of these Terms of
            Service (the “Agreement”) then in effect with the following entity
            or entities:
          </Text>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 w-full mb-4 p-4">
        <CustomButton title="Download" />
        <CustomButton
          title="Close"
          className="bg-[#2e2e2e] mt-4"
          onPress={() => {
            router.replace("/(tabs)/create");
          }}
        />
      </View>
    </View>
  );
};

export default privacy;
