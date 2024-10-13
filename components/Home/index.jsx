import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Homepage = () => {
  return (
    <View style={styles.body}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../../assets/images/menu.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/images/Notification 1.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>Welcome, Jessie.</Text>
      <View style={styles.assetCard}>
        <Text style={styles.yourAssetText}>Your total asset portfolio</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>N203,935</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Invest Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bestPlan}>
        <View style={styles.bestPlanText}>
          <Text style={styles.bestPlanTextLeft}>Best Plans</Text>
          <TouchableOpacity>
            <Text style={styles.bestPlanTextRight}>See All &rarr;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  body: { marginTop: 80, marginRight: 15, marginLeft: 15 },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  welcomeText: { fontSize: 34, fontWeight: 700, lineHeight: 44 },
  assetCard: {
    backgroundColor: "#31A078",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    marginTop: 30,
    borderRadius: 20,
  },
  amountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  yourAssetText: { color: "white", fontSize: 14, fontWeight: 500 },
  amount: { color: "white", fontSize: 30, fontWeight: 600 },
  button: {
    backgroundColor: "#FEFEFE",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 15,
    marginRight: 8,
  },
  buttonText: { color: "#31A078", fontSize: 14, fontWeight: 600 },
  bestPlan: { paddingTop: 20 },
  bestPlanText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bestPlanTextLeft: { fontSize: 22, fontWeight: 700 },

  bestPlanTextRight: { color: "#FE555D" },
});
