import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = () => {
  const route = useRoute();

  const { categoryId: caId } = route.params;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen: {caId}</Text>
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
