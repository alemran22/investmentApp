import { Image, StyleSheet, View } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.main1}>
      <Image source={require("../../assets/images/homepage-img.png")} />
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  main1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ffffff",
  },
});
