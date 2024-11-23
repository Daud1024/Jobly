import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { router } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import CustomButton from "@/components/CustomButton";

const Vacancy = () => {
  const [step, setStep] = useState(1); // Initialize step state
  const [form, setForm] = useState({
    Company: "",
    Salary: "",
    Position: "",
    Type: "",
    Setting: "",
    Description: "",
    Deadline: "",
    Location: "",
    Education: "",
    Experience: "",
    Skills: "",
    Duties: "",
    Benefits: "",
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 5); // Add 5 days to the current date
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 4); // Add 4 months to the current date

    if (date >= minDate && date <= maxDate) {
      hideDatePicker();
      setForm({ ...form, Deadline: date.toISOString().split("T")[0] });
    } else {
      Alert.alert(
        "Invalid date",
        "Please select a date between 5 days from today and 4 months from today."
      );
    }
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

  const submitVacancy = async () => {
    if (!validateForm()) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "vacancies"), form);
      Alert.alert("Success", "Vacancy created successfully!");
      router.replace("/(tabs)/create");
    } catch (error) {
      Alert.alert("Error", "Failed to create vacancy. Please try again.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Post Your Vacancy
          </Text>
        </View>
        <View className="p-5">
          {step === 1 && (
            <>
              <InputField
                label="Company Name"
                placeholder="Enter the hiring company name"
                value={form.Company}
                onChangeText={(value) => handleInputChange("Company", value)}
              />
              <InputField
                label="Position"
                placeholder="Enter the vacant job title"
                value={form.Position}
                onChangeText={(value) => handleInputChange("Position", value)}
              />
              <InputField
                label="Deadline"
                placeholder="Enter the application deadline"
                value={form.Deadline}
                onTouchEnd={showDatePicker}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <InputField
                label="Job Location"
                placeholder="Enter job location"
                value={form.Location}
                onChangeText={(value) => handleInputChange("Location", value)}
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
                label="Job Description"
                placeholder="Write the job description in detail"
                value={form.Description}
                multiline
                onChangeText={(value) =>
                  handleInputChange("Description", value)
                }
                className="rounded-lg h-[130px] bg-neutral-100"
              />
              <InputField
                label="Job Duties"
                placeholder="Write the job duties in detail"
                value={form.Duties}
                multiline
                onChangeText={(value) => handleInputChange("Duties", value)}
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
                label="Skills"
                placeholder="Enter required skills"
                value={form.Skills}
                onChangeText={(value) => handleInputChange("Skills", value)}
              />
              <InputField
                label="Education"
                placeholder="Enter the required qualification"
                value={form.Education}
                onChangeText={(value) => handleInputChange("Education", value)}
              />
              <InputField
                label="Job Type"
                placeholder="Specify the job type"
                value={form.Type}
                onChangeText={(value) => handleInputChange("Type", value)}
              />
              <InputField
                label="Job Setting"
                placeholder="Specify the job setting"
                value={form.Setting}
                onChangeText={(value) => handleInputChange("Setting", value)}
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
                label="Renumeration"
                placeholder="Enter the salary range"
                value={form.Salary}
                onChangeText={(value) => handleInputChange("Salary", value)}
              />
              <InputField
                label="Benefits"
                placeholder="Enter job incentives"
                value={form.Benefits}
                onChangeText={(value) => handleInputChange("Benefits", value)}
              />
              <InputField
                label="Experience"
                placeholder="Specify required experience"
                value={form.Experience}
                onChangeText={(value) => handleInputChange("Experience", value)}
              />
              <InputField
                label="Advantages"
                placeholder="Specify the job advantages"
                value={form.Setting}
                onChangeText={(value) => handleInputChange("Setting", value)}
              />
              <CustomButton
                title="Create Vacancy"
                className="mt-6"
                onPress={submitVacancy}
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
        </View>
      </View>
    </ScrollView>
  );
};

export default Vacancy;
