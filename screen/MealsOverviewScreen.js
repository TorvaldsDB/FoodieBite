import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { categoryId: catId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [navigation, catId]);

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
