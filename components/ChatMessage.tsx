import React from "react";
import { View, Text, Image } from "react-native";

interface ChatMessageProps {
  message: string;
  isOutgoing: boolean;
  profileImageUrl: string;
  timestamp: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isOutgoing,
  profileImageUrl,
  timestamp,
}) => {
  return (
    <View
      className={`flex-row ${isOutgoing ? "justify-end" : "justify-start"} items-center my-2`}
    >
      <Image
        source={{ uri: profileImageUrl }}
        className="h-10 w-10 rounded-full mx-2"
      />
      <View
        className={`bg-${isOutgoing ? "green-200" : "gray-200"} p-3 rounded-2xl max-w-3/4 shadow-md`}
      >
        <Text className="text-black">{message}</Text>
        <Text className="text-gray-500 text-xs mt-1">{timestamp}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;
