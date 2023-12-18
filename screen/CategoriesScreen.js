import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item: { title, color } }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    };
    return (
      <CategoryGridTile title={title} color={color} onPress={pressHandler} />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
