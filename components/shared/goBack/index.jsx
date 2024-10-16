import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const GoBack = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({});
