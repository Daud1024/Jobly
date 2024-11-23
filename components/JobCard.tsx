import { Job } from "@/types/type";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { icons, images } from "@/constants";
import { router } from "expo-router";

const useFirestoreData = (vacancies: string) => {
  const [data, setData] = useState<Job[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, vacancies));
        if (querySnapshot.empty) {
          console.log("No matching documents.");
        } else {
          console.log("Documents found:", querySnapshot.size);
        }
        const jobData = querySnapshot.docs.map((doc) => {
          const data = doc.data() as Job;
          return {
            ...data,
            id: doc.id,
          };
        });
        setData(jobData);
        setLoading(false);
      } catch (error) {
        const errorMessage = (error as { message: string }).message;
        console.error("Error fetching data:", errorMessage);
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchData();
  }, [vacancies]);

  return { data, loading, error };
};

const JobCard = () => {
  const { data, loading, error } = useFirestoreData("vacancies");

  if (loading) {
    return <Text className="text-center">Loading...</Text>;
  }

  if (error) {
    return (
      <Text className="text-center text-red-500">
        Error fetching data: {error}
      </Text>
    );
  }

  const renderItem = ({ item }: { item: Job }) => (
    <View key={item.id} className="flex py-4 px-4 bg-white rounded-lg mt-5">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="flex-row items-center space-x-2">
          <Image
            source={images.airbnb}
            className="w-[40px] h-[40px] rounded-full items-center justify-center"
          />
          <Text className="text-[16px] text-[#9b9a9a] font-JakartaMedium">
            {item.Company}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.heart} className="h-5 w-5" />
        </TouchableOpacity>
      </View>

      <View className="pt-2">
        <TouchableOpacity>
          <Text className="font-JakartaSemiBold text-[16px] text-[#1e1e1e]">
            {item.Position}
          </Text>
        </TouchableOpacity>
        <Text className="font-JakartaSemiBold text-[11px] text-[#FEC300]">
          {item.Salary} / Month
        </Text>
        <TouchableOpacity
          className="bg-[#FEC300] rounded-full w-[100px] py-2 px-2 flex items-center mt-5 mb-2"
          onPress={() => {
            router.push({
              pathname: "/(docs)/jobspec",
              params: {
                job: JSON.stringify(item),
              },
            });
          }}
        >
          <Text className="text-[12px] font-JakartaBold text-[#1e1e1e]">
            Easily Apply
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between items-center mt-2">
        <View className="flex-row space-x-1 items-center">
          <Image source={icons.point} className="h-5 w-5" />
          <Text className="font-Jakarta text-[12px] text-[#9b9a9a]">
            {item.Location} - {item.Setting} - {item.Type}
          </Text>
        </View>
        <View>
          <Text className="font-Jakarta text-[12px] text-[#9b9a9a]">
            2 weeks ago
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

export default JobCard;
