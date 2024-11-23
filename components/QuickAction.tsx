import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { icons } from "@/constants";
import { useNavigation } from "expo-router";
// Import other icon components as needed

interface QuickActionProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode; // Use keyof to restrict the iconName prop to the keys of the iconMap object
  onPress: () => void; // Define onPress prop as a function that returns void
}

const QuickAction = ({ title, subtitle, icon, onPress }: QuickActionProps) => {
  const navigation = useNavigation(); // Get the navigation object
  // Get the icon component based on the iconName prop

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex p-5 bg-white rounded-lg mx-5 mt-3"
    >
      <View className="flex flex-row items-center justify-between">
        <View>
          <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">
            {title}
          </Text>
          <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-2]">
            {subtitle}
          </Text>
        </View>
        <View>
          <Text className="text-2xl text-[#1e1e1e] font-JakartaLight">
            {icon}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuickAction;
