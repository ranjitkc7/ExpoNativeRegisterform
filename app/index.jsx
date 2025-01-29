import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import "../global.css";
import { useRouter } from "expo-router";

const IndexPage = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center h-[100%] bg-[#ffe5ec]">
      <Text className="text-[2rem] font-[700] ">
        Welcome! to the Form File.
      </Text>
      <TouchableOpacity
        className="mt-4 bg-[#ff0054] px-4 py-2
      rounded-[8px]"
       onPress={() => router.push("/register")}
      >
        <Text className="text-[1.3rem] font-[600] text-center  text-white">
          Lets Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexPage;
