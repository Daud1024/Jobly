import { icons } from "@/constants";
import { Clerk } from "@clerk/clerk-expo";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import InputField from "@/components/InputField";
import QuickAction from "@/components/QuickAction";
import { router } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Create = () => {
  const { user } = useUser();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1); // Initialize step state

  const vacanyModal = () => setVisible(true);
  const hide = () => setVisible(false);

  const signOut = async () => {
    await Clerk.signOut();
    router.replace("/(auth)/sign-in");
    // Replace "Auth" with the name of your authentication screen
  };

  const [form, setForm] = useState({
    title: "",
    name: "",
    logo: "",
    workPlace: "",
    jobType: "",
    location: "",
    description: "",
    requirements: "",
    responsibilities: "",
    skills: "",
    pay: "",
    deadline: "",
    gender: "",
  });

  return (
    <ScrollView>
      <SafeAreaView className="flex-1">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(resume)/resume");
          }}
          className="flex p-5 bg-white rounded-lg mx-5 mt-5"
        >
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">
                Create your resume
              </Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-2]">
                Your very own professional resume.
              </Text>
            </View>
            <View>
              <Text className=" text-2xl text-[#1e1e1e] font-JakartaLight">
                +
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.replace("/(resume)/vacancy");
          }}
          className="flex p-5 bg-white rounded-lg mx-5 mt-3"
        >
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">
                Post a vacancy
              </Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-2]">
                Increase the quality of your hire.
              </Text>
            </View>
            <View>
              <Text className=" text-2xl text-[#1e1e1e] font-JakartaLight">
                +
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <QuickAction
          onPress={() => {
            router.replace("/(chat)/BrowseCandidates");
          }}
          title="Browse Candidates"
          subtitle="Find the best candidate for your next hire."
          icon={
            <Image
              source={icons.search}
              className="h-[24px] w-[24px] items-center"
            />
          }
        />

        <QuickAction
          onPress={() => {
            router.replace("/(tabs)/create");
          }}
          title="Browse Companies"
          subtitle="Let's make your next great hire happen."
          icon={
            <Image
              source={icons.search}
              className="h-[24px] w-[24px] items-center"
            />
          }
        />

        <QuickAction
          onPress={() => {
            router.replace("/(docs)/privacy");
          }}
          title="Privacy Policy"
          subtitle="How we collect and safely use your data."
          icon={
            <Image
              source={icons.to}
              className="h-[24px] w-[24px] items-center"
            />
          }
        />

        <QuickAction
          onPress={() => {
            router.replace("/(docs)/terms");
          }}
          title="Terms"
          subtitle="Terms of service for job seekers & empl.."
          icon={
            <Image
              source={icons.to}
              className="h-[24px] w-[24px] items-center"
            />
          }
        />

        <TouchableOpacity
          className="flex p-5 bg-white rounded-lg mx-5 mt-3"
          onPress={signOut}
        >
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">
                Sign Out
              </Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-2]">
                {user?.emailAddresses[0].emailAddress}
              </Text>
            </View>
            <View>
              <Image source={icons.out} className="h-[20px] w-[20px]" />
            </View>
          </View>
        </TouchableOpacity>

        <SafeAreaView>
          <Modal id="vacanyModal" visible={visible} animationType="slide">
            <ScrollView>
              <View>
                <TouchableOpacity onPress={hide} className=" flex p-4">
                  <Image
                    source={icons.backArrow}
                    className="h-[24px] w-[24px]"
                  />
                </TouchableOpacity>
              </View>
              <View className="flex items-center justify-center mx-5 mb-5  mt-8">
                <View
                  style={{
                    width: "100%",
                    height: 5,
                    backgroundColor: "#E5E5E5",
                    borderRadius: 5,
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: `${(1 / 3) * 100}%`,
                      height: "100%",
                      backgroundColor: step === 1 ? "#FEC300" : "#E5E5E5",
                      borderRadius: 5,
                    }}
                    onPress={() => setStep(1)}
                  />
                  <View
                    style={{
                      width: 3,
                      height: "100%",
                      backgroundColor: "#E5E5E5",
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      width: `${(1 / 3) * 100}%`,
                      height: "100%",
                      backgroundColor: step === 2 ? "#FEC300" : "#E5E5E5",
                      borderRadius: 5,
                    }}
                    onPress={() => setStep(2)}
                  />
                  <View
                    style={{
                      width: 3,
                      height: "100%",
                      backgroundColor: "#E5E5E5",
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      width: `${(1 / 3) * 100}%`,
                      height: "100%",
                      backgroundColor: step === 3 ? "#FEC300" : "#E5E5E5",
                      borderRadius: 5,
                    }}
                    onPress={() => setStep(3)}
                  />
                </View>
              </View>

              <View className="px-5">
                {step === 1 && (
                  <>
                    <InputField
                      label="1. Job title"
                      placeholder="Add a job title"
                      className="py-3"
                      value={form.title}
                      onChangeText={(value) =>
                        setForm({ ...form, title: value })
                      }
                    />
                    <InputField
                      label="2. Company name"
                      placeholder="Add your company name"
                      className="py-3"
                      value={form.name}
                      onChangeText={(value) =>
                        setForm({ ...form, name: value })
                      }
                    />
                    <InputField
                      label="3. Company logo"
                      placeholder="Upload you company logo"
                      className="py-3"
                      value={form.logo}
                      onChangeText={(value) =>
                        setForm({ ...form, logo: value })
                      }
                    />
                    <InputField
                      label="4. Workplace type"
                      placeholder="Select a workplace type"
                      className="py-3"
                      value={form.workPlace}
                      onChangeText={(value) =>
                        setForm({ ...form, workPlace: value })
                      }
                    />
                    <InputField
                      label="5. Job type"
                      placeholder="Select a job type"
                      className="py-3"
                      value={form.jobType}
                      onChangeText={(value) =>
                        setForm({ ...form, jobType: value })
                      }
                    />
                  </>
                )}
                {step === 2 && (
                  <>
                    <InputField
                      label="1. Job location"
                      placeholder="Add your job location"
                      className="py-3"
                      value={form.location}
                      onChangeText={(value) =>
                        setForm({ ...form, location: value })
                      }
                    />
                    <InputField
                      label="2. Job description"
                      placeholder="A brief description of the job"
                      className="py-3"
                      value={form.description}
                      onChangeText={(value) =>
                        setForm({ ...form, description: value })
                      }
                    />
                    <InputField
                      label="3. Essential requirements"
                      placeholder="A brief statement about your career"
                      className="py-3"
                      value={form.requirements}
                      onChangeText={(value) =>
                        setForm({ ...form, requirements: value })
                      }
                    />
                    <InputField
                      label="4. Key responsibilities"
                      placeholder="A brief statement about your career"
                      className="py-3"
                      value={form.responsibilities}
                      onChangeText={(value) =>
                        setForm({ ...form, responsibilities: value })
                      }
                    />
                    <InputField
                      label="5. Essential skills"
                      placeholder="A brief statement about your career"
                      className="py-3"
                      value={form.skills}
                      onChangeText={(value) =>
                        setForm({ ...form, skills: value })
                      }
                    />
                  </>
                )}
                {step === 3 && (
                  <>
                    <InputField
                      label="5. Renummeration"
                      placeholder="Your highest completed qualification"
                      className="py-3"
                      value={form.pay}
                      onChangeText={(value) => setForm({ ...form, pay: value })}
                    />
                    <InputField
                      label="6. Application deadline"
                      placeholder="Other degrees or certifications"
                      className="py-3"
                      value={form.deadline}
                      onChangeText={(value) =>
                        setForm({ ...form, deadline: value })
                      }
                    />
                  </>
                )}
              </View>
              <View className="flex items-center justify-center mx-5 py-4 mt-5 rounded-full bg-[#FEC300]">
                <TouchableOpacity onPress={() => setStep(step + 1)}>
                  <Text className="text-[16px] font-semibold">
                    {step === 3 ? "Save & Continue" : "Next"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex items-center justify-center mx-5 py-4 mt-5 rounded-full bg-[#2e2e2e]">
                <TouchableOpacity onPress={hide}>
                  <Text className="text-[16px] text-white font-semibold">
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Create;
