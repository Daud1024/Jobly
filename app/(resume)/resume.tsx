import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { images } from "@/constants";
import { router } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import CustomButton from "@/components/CustomButton";

const Resume = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    gender: "",
    birthday: "",
    location: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    workHistory: "",
    references: "",
    skill: "",
    certification: "",
    language: "",
    linkedin: "",
    profession: "",
    work_description: "",
    qualification_samary: "",
  });

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setForm({ ...form, birthday: date.toISOString().split("T")[0] });
  };

  const handleInputChange = (name: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return Object.values(form).every((value) => value.trim() !== "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "resumes"), form);
      Alert.alert("Success", "Resume submitted successfully!");
      router.replace("/(tabs)/create");
    } catch (error) {
      Alert.alert("Error", "Failed to submit resume. Please try again.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="w-full h-[250px]" />
        <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
          Create Your Resume
        </Text>
      </View>
      <View className="p-5">
        {step === 1 && (
          <>
            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              value={form.name}
              onChangeText={(value) => handleInputChange("name", value)}
            />
            <InputField
              label="Gender"
              placeholder="Select your gender"
              value={form.gender}
              onChangeText={(value) => handleInputChange("gender", value)}
            />
            <InputField
              label="Date Of Birth"
              placeholder="Enter your date of birth"
              value={form.birthday}
              onTouchEnd={showDatePicker}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <InputField
              label="Location"
              placeholder="Enter your physical address"
              value={form.location}
              onChangeText={(value) => handleInputChange("location", value)}
            />
            <CustomButton
              title="Next"
              className="mt-6"
              onPress={() => setStep(2)}
            />
            <CustomButton
              title="Cancel"
              className="mt-6 bg-[#2e2e2e]"
              onPress={() => {
                router.replace("/(tabs)/create");
              }}
            />
          </>
        )}

        {step === 2 && (
          <>
            <InputField
              label="Email"
              placeholder="Enter your email address"
              value={form.email}
              onChangeText={(value) => handleInputChange("email", value)}
            />
            <InputField
              label="Phone Number"
              placeholder="Enter your contact number"
              value={form.phone}
              onChangeText={(value) => handleInputChange("phone", value)}
            />
            <InputField
              label="Profile Summary"
              placeholder="Tell us what you are about"
              value={form.summary}
              onChangeText={(value) => handleInputChange("summary", value)}
              multiline
              className="rounded-lg h-[130px] bg-neutral-100"
            />
            <CustomButton
              title="Next"
              className="mt-6"
              onPress={() => setStep(3)}
            />
            <CustomButton
              title="Previous"
              className="mt-6 bg-[#2e2e2e]"
              onPress={() => setStep(1)}
            />
          </>
        )}

        {step === 3 && (
          <>
            <InputField
              label="Education"
              placeholder="Enter your education details"
              value={form.education}
              onChangeText={(value) => handleInputChange("education", value)}
            />
            <InputField
              label="Work History"
              placeholder="Enter your work experience"
              value={form.workHistory}
              onChangeText={(value) => handleInputChange("workHistory", value)}
            />
            <InputField
              label="Skills"
              placeholder="Enter your skills separated by a comma"
              value={form.skill}
              onChangeText={(value) => handleInputChange("skill", value)}
            />
            <InputField
              label="Certifications"
              placeholder="Enter your certifications"
              value={form.certification}
              onChangeText={(value) =>
                handleInputChange("certification", value)
              }
            />
            <CustomButton
              title="Next"
              className="mt-6"
              onPress={() => setStep(4)}
            />
            <CustomButton
              title="Previous"
              className="mt-6 bg-[#2e2e2e]"
              onPress={() => setStep(2)}
            />
          </>
        )}

        {step === 4 && (
          <>
            <InputField
              label="Previous Work History"
              placeholder="Describe the normal day at your previous work"
              value={form.work_description}
              onChangeText={(value) =>
                handleInputChange("work_description", value)
              }
              multiline
              className="rounded-lg h-[130px] bg-neutral-100"
            />
            <InputField
              label="Qualification Summary"
              placeholder="Write a brief course outline or education journey"
              value={form.qualification_samary}
              onChangeText={(value) =>
                handleInputChange("qualification_samary", value)
              }
              multiline
              className="rounded-lg h-[130px] bg-neutral-100"
            />

            <CustomButton
              title="Next"
              className="mt-6"
              onPress={() => setStep(5)}
            />
            <CustomButton
              title="Previous"
              className="mt-6 bg-[#2e2e2e]"
              onPress={() => setStep(2)}
            />
          </>
        )}

        {step === 5 && (
          <>
            <InputField
              label="References"
              placeholder="Enter your references"
              value={form.references}
              onChangeText={(value) => handleInputChange("references", value)}
            />
            <InputField
              label="Languages"
              placeholder="Enter the languages you speak"
              value={form.language}
              onChangeText={(value) => handleInputChange("language", value)}
            />
            <InputField
              label="LinkedIn Profile"
              placeholder="Enter your LinkedIn profile link"
              value={form.linkedin}
              onChangeText={(value) => handleInputChange("linkedin", value)}
            />
            <InputField
              label="Your Profession"
              placeholder="Enter your profession name"
              value={form.profession}
              onChangeText={(value) => handleInputChange("profession", value)}
            />
            <CustomButton
              title="Create Resume"
              className="mt-6"
              onPress={handleSubmit}
            />
            <CustomButton
              title="Previous"
              className="mt-6 bg-[#2e2e2e]"
              onPress={() => setStep(3)}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Resume;
