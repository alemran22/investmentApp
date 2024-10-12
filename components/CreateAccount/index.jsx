import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import React from "react";

const CreateAccount = () => {
  return (
    <View>
      <View style={styles.leftArrow}>
        <Image source={require("../../assets/images/leftArrow.png")} />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.textContent}>
          <Text style={styles.text1}>Create an account</Text>
          <Text style={styles.text2}>Invest and double your income now</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput1} placeholder="Full name" />
          <TextInput style={styles.textInput1} placeholder="Email address" />
          <TextInput style={styles.textInput2} placeholder="Password" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            // onPress={onPressCreateAccount}
            title="  Create account  "
            color="#31A062"
          />
          <Text style={styles.buttonText}>Already have an account?</Text>
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  leftArrow: {
    marginTop: 100,
    marginLeft: 20,
    height: "3%",
    width: "7%",
  },
  mainContent: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    backgroundColor: "#FFFFFF",
  },
  textContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  text2: {
    fontWeight: "medium",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
    marginLeft: 25,
    marginRight: 25,
    display: "flex",
    gap: 25,
  },
  textInput1: {
    height: "40",
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 10,
  },
  textInput2: {
    height: "40",
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  buttonText: {
    color: "#31A062",
    marginTop: 20,
  },
});
