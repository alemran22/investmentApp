import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const NotificationCard = ({ image, description, superscript }) => {
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image source={image} />
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.superscript}>
        <Text style={styles.superText}>{superscript}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: { width: "20%", marginRight: 10 },
  description: { width: "60%" },
  descriptionText: { fontSize: 17 },
  superscript: {
    width: "20%",
  },
  superText: { fontSize: 13 },
});
