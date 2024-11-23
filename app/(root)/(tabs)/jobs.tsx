import JobCard from "@/components/JobCard";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Jobs = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View className="flex flex-row px-5 pt-12 items-center justify-between">
          <View className="bg-[#FEC300] px-[11px] py-1 mt-5 rounded-full">
            <TouchableOpacity>
              <Text className="text-[13px] font-medium text-white">
                Pending
              </Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#fff] px-[11px] py-1 mt-5 rounded-full">
            <TouchableOpacity>
              <Text className="text-[13px] font-medium text-[#1e1e1e]">
                Accepted
              </Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#fff] px-[11px] py-1 mt-5 rounded-full">
            <TouchableOpacity>
              <Text className="text-[13px] font-medium text-[#1e1e1e]">
                Rejected
              </Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#fff] px-[11px] py-1 mt-5 rounded-full">
            <TouchableOpacity>
              <Text className="text-[13px] font-medium text-[#1e1e1e]">
                Cancelled
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <JobCard />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Jobs;
