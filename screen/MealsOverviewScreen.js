import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = () => {
  const route = useRoute();

  const { categoryId: catId } = route.params;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = ({
    item: { title, imageUrl, duration, complexity, affordability },
  }) => {
    const mealItemProps = {
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
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
