import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const newColor = () => Math.floor(Math.random() * 256);
  return `rgb(${newColor()}, ${newColor()}, ${newColor()})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
