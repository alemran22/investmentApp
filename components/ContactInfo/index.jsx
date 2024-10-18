import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import GoBack from "../shared/goBack";
import profile from "../../assets/images/profileImg.png";
import Feather from "@expo/vector-icons/Feather";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import cardData from "./cardData";
import CardInfo from "./CardInfo";

const ContactInfo = ({ navigation }) => {
  const [image, setImage] = useState(null);
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
    <View className="pt-10 px-2 w-full">
      {/* header start*/}
      <View className="flex flex-row ">
        <View className="w-[8%]">
          <GoBack navigation={navigation} />
        </View>
        <View className="w-[92%]">
          <Text className="text-center text-xl font-semibold pr-8">
            Contact Info
          </Text>
        </View>
      </View>
      {/* header end */}
      {/* image sec start*/}
      <View className="flex flex-row mt-10 justify-center">
        <View className="h-[150px] w-[150px] relative rounded-full">
          <Image source={profile} height={150} width={150} />
          <View className="bg-black/30 w-full h-full absolute rounded-full"></View>
          <View className="absolute top-14 left-16">
            <TouchableOpacity onPress={pickImage}>
              <Feather name="edit-2" size={28} color="white" />
            </TouchableOpacity>
            {/* {image && <Image source={{ uri: image }} />} */}
          </View>
        </View>
      </View>
      {/* image sec end*/}
      {/* card container start */}
      <ScrollView>
        <View className="flex flex-col mt-3 w-full px-2">
          {/* card */}
          {cardData.map((data) => (
            <CardInfo key={data.id} {...data} />
          ))}
        </View>
      </ScrollView>
      {/* card container end */}
    </View>
  );
};

export default ContactInfo;
