import { InputFieldProps } from "@/types/type";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  multiline = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="my-2 w-full">
        <Text className={"text-lg font-JakartaSemiBold mb-3 ${labelStyle}"}>
          {label}
        </Text>
        <View
          className={
            "flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border-neutral-100 focus:border-primary-500 ${containerStyle}"
          }
        >
          {icon && (
            <Image source={icon} className={"w-6 h-6 ml-4 ${iconStyle}"} />
          )}
          <TextInput
            className={
              "rounded-full p-5 font-JakartaSemiBold text-[13px] flex-1 ${inputStyle} text-left"
            }
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;