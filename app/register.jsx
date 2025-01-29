import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import "../global.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const schema = yup.object().shape({
  userName: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 character"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ data }) => {
    console.log(data);
    Alert.alert("Success!", "You have successfully registered");
    reset();
  };
  return (
    <View className="flex-1 items-center justify-center h-[100%] p-[1rem] bg-[#ffe5ec]">
      <Text className="text-[2.4rem] font-[700] text-center mb-[1rem]">
        Create Account
      </Text>
      <Controller
        control={control}
        name="userName"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <TextInput
              className="border-1 text-[1.1rem] border-gray-300 h-[3rem] w-full
               bg-white text-black rounded-md p-2 mt-[1rem]"
              placeholder="Enter the Name"
              placeholderTextColor="#000"
              onBlur={() => {
                onBlur();
                trigger("userName");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("userName");
              }}
              value={value}
              keyboardType="default"
              autoCapitalize="none"
            />
            {errors.userName && (
              <Text className="text-red-500 text-xs">
                {errors.userName.message}
              </Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <TextInput
              className="border-1 text-[1.1rem] border-gray-300 h-[3rem] w-full
               bg-white text-black rounded-md p-2 mt-[1rem]"
              placeholder="Enter the Email"
              placeholderTextColor="#000"
              onBlur={() => {
                onBlur();
                trigger("email");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("email");
              }}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <Text className="text-red-500 text-xs">
                {errors.email.message}
              </Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <View className="relative w-full">
              <TextInput
                className="border-1 text-[1.1rem] border-gray-300 h-[3rem] w-full
               bg-white text-black rounded-md p-2 mt-[1rem]"
                placeholder="Enter the Password"
                placeholderTextColor="#000"
                onBlur={() => {
                  onBlur();
                  trigger("password");
                }}
                onChangeText={(text) => {
                  onChange(text);
                  trigger("password");
                }}
                value={value}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                className="absolute top-[1.8rem] right-[1rem]"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text>{showPassword ? "Hide" : "Show"}</Text>
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text className="text-red-500 text-xs">
                {errors.password.message}
              </Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <View className="relative w-full">
              <TextInput
                className="border-1 text-[1.1rem] border-gray-300 h-[3rem] w-full
               bg-white text-black rounded-md p-2 mt-[1rem]"
                placeholder="Re-type password"
                placeholderTextColor="#000"
                onBlur={() => {
                  onBlur();
                  trigger("confirmPassword");
                }}
                onChangeText={(text) => {
                  onChange(text);
                  trigger("confirmPassword");
                }}
                value={value}
                secureTextEntry={!showConPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                className="absolute top-[1.8rem] right-[1rem]"
                onPress={() => setShowConPassword(!showConPassword)}
              >
                <Text>{showConPassword ? "Hide" : "Show"}</Text>
              </TouchableOpacity>
            </View>
            {errors.confirmPassword && (
              <Text className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </Text>
            )}
          </>
        )}
      />
      <TouchableOpacity
        className="mt-4 bg-[#ff0054] px-4 py-2 rounded-[8px] w-full"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-[1.3rem] font-[600] text-center  text-white">
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;
