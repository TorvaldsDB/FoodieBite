import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const renderMealItem = ({
    item: { id, title, imageUrl, duration, complexity, affordability },
  }) => {
    const mealItemProps = {
      id,
      title,
      imageUrl,
      affordability,
      complexity,
      duration,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
