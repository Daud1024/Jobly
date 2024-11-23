import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants";
import { router } from "expo-router";

const OutGoing = () => {
  return (
    <ScrollView>
      <View className="flex-row justify-between p-5 mx-5 mt-2 bg-white rounded-lg">
        <View className="flex">
          <View className="w-[325px]">
            <Text className="text-[#9b9a9a] font-bold">You</Text>
            <Text className="text-[#9b9a9a] leading-4 pt-1 text-[12px]">
              In total, you might expect around 8-14 days to implement a basic
              real-time chat feature.
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-[#9b9a9a]  text-[10px]">15:52</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OutGoing;
