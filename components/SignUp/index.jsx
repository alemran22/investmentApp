import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SignUp = ({ navigation }) => {
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateAccount");
          }}
          style={styles.CreateAccountButtonContainer}
        >
          <Text style={styles.button}> Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text3}>Login</Text>
        </TouchableOpacity>
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
    fontSize: 28,
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
  CreateAccountButtonContainer: {
    marginLeft: 30,
    marginRight: 30,
    width: "80%",
    backgroundColor: "#31A062",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 50,
  },
  button: {
    width: "100%",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
