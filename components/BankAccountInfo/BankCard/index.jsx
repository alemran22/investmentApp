import { View, Text, Image } from "react-native";
import React from "react";

const BankCard = ({ image, bankName, accountName, icon }) => {
  return (
    <View className="flex flex-row items-center justify-between w-full shadow-xl rounded-lg bg-white py-4 my-2">
      <View className="w-2/12 p-2">
        <Image source={image} height={47} width={47} />
      </View>
      <View className="w-7/12">
        <Text className="text-base font-semibold">{bankName}</Text>
        <Text className="text-sm">{accountName}</Text>
      </View>
      <View className="w-1/12">{icon}</View>
    </View>
  );
};

export default BankCard;
