import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { ThemeColors } from "react-navigation";

const ComponentsScreen = () => {
  const name = "Bee";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
