import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../shared/Footer";
import ProductsData from "../../constants/Products";
import { TouchableOpacity } from "react-native";

const Products = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={ProductsData}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id}>
            <View style={styles.productCard}>
              <Text style={styles.cardText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  body: { paddingTop: 40, paddingLeft: 15, paddingRight: 15, height: "100%" },
  title: { fontSize: 30, textAlign: "center" },
  productCard: {
    backgroundColor: "gray",
    marginTop: 10,
    padding: 8,
  },
  cardText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
