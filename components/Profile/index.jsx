import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Footer from "../shared/Footer";

import ProfileData from "../../constants/Profile";
import ProfileInfo from "./ProfileInfo";
import { ScrollView } from "react-native";
import GoBack from "../shared/goBack";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.body}>
      {/* header */}
      <GoBack navigation={navigation} />
      <Text style={styles.title}>Profile</Text>
      {/* main */}
      <View style={styles.imageSection}>
        <Image source={require("../../assets/images/profileImg.png")} />
        <Text style={styles.nameText}>Jonas Macroni</Text>
        <Text style={styles.expert}>Expert</Text>
      </View>
      <ScrollView>
        <View>
          {ProfileData.map((data) => (
            <ProfileInfo key={data.id} {...data} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  body: {
    padding: 15,
    paddingTop: 40,
    height: "100%",
    backgroundColor: "#D3D2D2",
  },
  title: { fontSize: 26, fontWeight: "bold", marginTop: 15, marginBottom: 8 },
  main: { height: "100%" },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 15,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "semibold",
    marginTop: 15,
    marginBottom: 7,
  },
  expert: { fontSize: 17 },
});
