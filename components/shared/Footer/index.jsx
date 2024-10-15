import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomePage");
        }}
        style={styles.footerCard}
      >
        <Image source={require("../../../assets/images/Home 1.png")} />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductsScreen");
        }}
        style={styles.footerCard}
      >
        <Image source={require("../../../assets/images/Search 1.png")} />
        <Text style={styles.footerText}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Transactions");
        }}
        style={styles.footerCard}
      >
        <Image source={require("../../../assets/images/transaction 1.png")} />
        <Text style={styles.footerText}>Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
        style={styles.footerCard}
      >
        <Image source={require("../../../assets/images/Profile 1.png")} />
        <Text style={styles.footerText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    height: 70,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  footerCard: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footerText: { marginTop: 10 },
});
