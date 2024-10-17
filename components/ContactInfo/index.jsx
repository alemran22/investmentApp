import { Image, StyleSheet, Text, View } from "react-native";
import GoBack from "../shared/goBack";
import profile from "../../assets/images/profileImg.png";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ContactInfo = ({ navigation }) => {
  const [image, setImage] = useState(profile);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.body}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.arrow}>
          <GoBack navigation={navigation} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Contact Info</Text>
        </View>
      </View>
      {/* image sec */}
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Image source={profile} height={150} width={150} />
          <View style={styles.shadow}></View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={pickImage}>
              <Feather name="edit-2" size={28} color="black" />
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} />}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  body: { paddingTop: 40, padding: 10 },
  header: { display: "flex", flexDirection: "row" },
  arrow: { width: "8%" },
  title: { width: "92%" },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "semibold",
    paddingRight: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  image: {
    height: 150,
    width: 150,
    position: "relative",
    borderRadius: "100%",
  },
  icon: { position: "absolute", top: 60, left: 60 },
  shadow: {},
});
