import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { ThemeColors } from "react-navigation";

const ComponentsScreen = () => {
  const name = <Text>Bee</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
