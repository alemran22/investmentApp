import { Button, Image, StyleSheet, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.main2}>
      <Image
        style={styles.img}
        source={require("../../assets/images/SignUp.png")}
      />
      <View style={styles.div2}>
        <Text style={styles.text1}>Stay on top of your finance with us.</Text>
        <Text style={styles.text2}>
          We are your new financial Advisors to recommend the best investments
          for you.
        </Text>
      </View>
      <View style={styles.div3}>
        <Button
          style={styles.button}
          // onPress={onPressCreateAccount}
          title="Create account"
          color="#31A062"
        />
        <Text style={styles.text3}>Login</Text>
      </View>
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    height: "100%",
    backgroundColor: "#F",
  },
  img: {
    height: "30%",
    width: "70%",
  },
  div2: {
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
  div3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  text3: {
    color: "#31A062",
    marginTop: 10,
  },
});
