import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 18;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      state.red + action.payload > 2555 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
      return { ...state, red: state.red + action.payload };
    case "change_green":
      state.green + action.payload > 2555 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
      return { ...state, green: state.red + action.payload };
    case "change_blue":
      state.blue + action.payload > 2555 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
      return { ...state, blue: state.red + action.payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
