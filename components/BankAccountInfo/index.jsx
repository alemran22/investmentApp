import { View, Text } from "react-native";
import React from "react";
import GoBack from "../shared/goBack";
import transactionData from "./transactionData";
import BankCard from "./BankCard";
import { TouchableOpacity } from "react-native";

const BankAccountInfo = ({ navigation }) => {
  return (
    <View className="px-2 pt-10 h-screen">
      {/* header */}
      <View className="w-full h-12">
        <View className="flex flex-row items-center justify-between mb-4 ">
          <View className="w-1/4">
            <GoBack navigation={navigation} />
          </View>
          <Text className="text-2xl font-bold w-3/4">BankAccountInfo</Text>
        </View>
      </View>
      {/* card container */}
      <View className="flex flex-col mt-4 w-full h-(screen-32)">
        {transactionData.map((item) => (
          <BankCard key={item.id} {...item} navigation={navigation} />
        ))}
      </View>
      {/* footer */}
      <View className="h-20 mt-20">
        <TouchableOpacity className="bg-green-600 py-5 mx-4 rounded-3xl">
          <Text className="text-white text-lg font-semibold text-center">
            Add Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BankAccountInfo;
