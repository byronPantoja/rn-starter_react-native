import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  let counter = 0;
  return (
    <View>
      <Button title="Increase" />
      <Button title="Decrease" />
      <Text>Current Count:</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
