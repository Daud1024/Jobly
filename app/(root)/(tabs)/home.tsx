import JobCard from "@/components/JobCard";
import { SignedIn, useUser } from "@clerk/clerk-expo";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { icons } from "@/constants";
import InputField from "@/components/InputField";

export default function Page() {
  const { user } = useUser();

  return (
    <ScrollView>
      <SafeAreaView>
        {/*   <SignedIn>
        <Text className='font-JakartaMedium text-[16px] pt-10 pl-5'>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn> */}
        <View className="flex px-5 pt-10">
          <Text className="font-JakartaSemiBold text-lg">
            Find your perfect job
          </Text>
          <Text className="font-Jakarta text-[14px] text-[#9b9a9a9a]">
            Based on your preferences on Jobly
          </Text>
        </View>

        <JobCard />
      </SafeAreaView>
    </ScrollView>
  );
}
