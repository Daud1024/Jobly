import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface UserCardProps {
  user: {
    id: string;
    name: string;
    profession: string;
    qualification: string;
    profileImageUrl?: string;
  };
  onPress: () => void; // Add onPress to props
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        padding: 16,
        margin: 8,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: user.profileImageUrl || "https://via.placeholder.com/150",
          }}
          style={{ height: 64, width: 64, borderRadius: 32 }}
        />
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.name}</Text>
          <Text style={{ color: "gray" }}>{user.profession}</Text>
          <Text style={{ color: "gray" }}>{user.qualification}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
