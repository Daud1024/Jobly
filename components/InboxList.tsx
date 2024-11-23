import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants";

const InboxList = () => {
  return (
    <ScrollView>
      <TouchableOpacity className="flex-row justify-between p-5 mx-5 mt-2 bg-white rounded-lg">
        <View className="flex-row items-center space-x-2 justify-start">
          <View className="ml-[-7px]">
            <Image
              source={images.airbnb}
              className=" h-[40px] w-[40px] rounded-full"
            />
          </View>
          <View>
            <Text className="text-[#9b9a9a] font-bold">Airbnb</Text>
            <Text className="text-[#9b9a9a] text-[12px]">
              Over the last decade, Airbnb has grown fr...
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-[#9b9a9a] text-[10px]">15:45</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InboxList;
