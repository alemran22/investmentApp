import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBack from "../shared/goBack";
import NotificationData from "../../constants/Notification";
import NotificationCard from "./NotificationCard";

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      {/* header */}
      <GoBack navigation={navigation} />
      <Text style={styles.title}>Notification</Text>
      {/* card */}
      <View style={styles.cardContainer}>
        {NotificationData.map((item) => (
          <NotificationCard key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  body: {
    padding: 15,
    paddingTop: 40,
    height: "100%",
    backgroundColor: "#D3D2D2",
  },
  title: { fontSize: 26, fontWeight: "bold", marginTop: 15, marginBottom: 15 },
  cardContainer: { display: "flex", flexDirection: "column", gap: 30 },
});
