import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PAYLOAD_VALUE = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      state.counter + action.payload;
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      state.counter - action.payload;
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, setCounter: 0 });
  const { counter, setCounter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({
            type: "increase",
            payload: PAYLOAD_VALUE,
          });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({
            type: "decrease",
            payload: PAYLOAD_VALUE,
          });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
