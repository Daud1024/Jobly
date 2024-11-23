import InboxList from "@/components/InboxList";
import { images } from "@/constants";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons"; // Assuming you're using MaterialIcons

const Chat = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="absolute top-0 w-full h-[250px] z-0">
        <Image
          source={images.signUpCar}
          style={{ width: "100%", height: "100%" }}
        />
        <View className="absolute bottom-5 left-7 right-5 flex-row items-center justify-between">
          <Text className="text-3xl text-black font-JakartaSemiBold">
            My Chats
          </Text>
          <TouchableOpacity
            className="bg-white p-2 rounded-full shadow-md"
            onPress={() => {
              // Add your action here
              console.log("Add new chat");
            }}
          >
            <Icon name="add" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 mt-[200px]">
        <ScrollView>
          <InboxList />
          <InboxList />
          <InboxList />
          <InboxList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
