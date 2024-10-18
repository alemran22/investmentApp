import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CardInfo = ({ title, input, button }) => {
  return (
    <View className="flex flex-row justify-between items-center w-full py-2 border-b px-2 mt-6">
      <View className="">
        <Text className="text-sm">{title}</Text>
        <Text className="text-lg">{input}</Text>
      </View>
      <TouchableOpacity>
        <Text className="text-sm font-semibold text-green-500">{button}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardInfo;
