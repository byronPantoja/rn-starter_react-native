import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};

const randomRgb = () => {
  const newColor = () => Math.floor(Math.random() * 256);
  return `rgb(${newColor()}, ${newColor()}, ${newColor()})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
