import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import image from "../../assets/images/Card Stock01.png";
import image1 from "../../assets/images/Card Stock02.png";
import image2 from "../../assets/images/Card Stock02 (1).png";
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
      <ScrollView horizontal={false} style={styles.main}>
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
            <TouchableOpacity style={styles.bestPlanRight}>
              <Text style={styles.bestPlanTextRight}>See All &rarr;</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={styles.sliderContainer}>
            <View style={styles.card}>
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.bgImage}
              >
                <Text style={styles.cardText1}>Gold</Text>
                <Text style={styles.cardText2}>30% Return</Text>
              </ImageBackground>
            </View>
            <View style={styles.card}>
              <ImageBackground
                source={image1}
                resizeMode="cover"
                style={styles.bgImage}
              >
                <Text style={styles.cardText1}>Silver</Text>
                <Text style={styles.cardText2}>60% Return</Text>
              </ImageBackground>
            </View>
            <View style={styles.card}>
              <ImageBackground
                source={image2}
                resizeMode="cover"
                style={styles.bgImage}
              >
                <Text style={styles.cardText1}>Platinum</Text>
                <Text style={styles.cardText2}>90% Return</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
        {/* invesment guide */}
        <View>
          <Text style={styles.guideViewHeading}>Investment Guide</Text>
          {/* card1 */}
          <View style={styles.guideView}>
            <View style={styles.guide1}>
              <Text style={styles.guide1Text1}>Basic type of investments</Text>
              <Text style={styles.guide1Text2}>
                This is how you set your foot for 2020 Stock market recession.
                What’s next...
              </Text>
            </View>
            <View style={styles.guide2}>
              <View style={styles.main1}>
                <Image
                  source={require("../../assets/images/Ellipse 740 (1).png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.horizontal}></View>
          {/*  card2 */}
          <View style={styles.guideView}>
            <View style={styles.guide1}>
              <Text style={styles.guide1Text1}>How much can you start</Text>
              <Text style={styles.guide1Text2}>
                What do you like to see? It’s a very different market from 2018.
                The way...
              </Text>
            </View>
            <View style={styles.guide2}>
              <View style={styles.main1}>
                <Image
                  source={require("../../assets/images/Ellipse 740.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/Home 1.png")} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/Search 1.png")} />
          <Text style={styles.footerText}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/transaction 1.png")} />
          <Text style={styles.footerText}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerCard}>
          <Image source={require("../../assets/images/Home 1.png")} />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  body: { marginTop: 40, marginRight: 15, marginLeft: 15 },
  main: { height: "100%" },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
  },
  welcomeText: { fontSize: 34, fontWeight: "bold", lineHeight: 44 },
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
  yourAssetText: { color: "white", fontSize: 14, fontWeight: "medium" },
  amount: { color: "white", fontSize: 30, fontWeight: "semibold" },
  button: {
    backgroundColor: "#FEFEFE",
    paddingLeft: 18,
    paddingRight: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 15,
    marginRight: 8,
    paddingBottom: 1,
  },
  buttonText: {
    color: "#31A078",
    fontSize: 14,
    fontWeight: "semibold",
  },
  bestPlan: { paddingTop: 20 },
  bestPlanText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bestPlanTextLeft: { fontSize: 22, fontWeight: "bold" },
  bestPlanRight: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  bestPlanTextRight: { color: "#FE555D", fontSize: 18, fontWeight: "medium" },
  sliderContainer: { marginTop: 20 },
  card: { marginRight: 10 },
  bgImage: {
    height: 170,
    width: 134,
  },
  cardText1: {
    fontSize: 17,
    fontWeight: "semibold",
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },
  cardText2: {
    fontSize: 13,
    fontWeight: "semibold",
    marginLeft: 10,
    color: "white",
  },
  guideView: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  guideViewHeading: { fontSize: 22, fontWeight: "bold", marginTop: 30 },
  guide1: {
    width: "75%",
  },
  guide1Text1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  horizontal: {
    borderWidth: 0.5,
    borderBottomColor: "#D4D4D6",
    marginTop: 20,
  },
  guide1Text2: {
    marginTop: 5,
  },
  guide2: {
    width: "25%",
  },
  footer: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerCard: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footerText: { color: "#32A078" },
});
