import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const style = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 40,
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyle = [style.button];
  const textStyles = [style.text];

  if (size === "double") {
    buttonStyle.push(style.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyle.push(style.buttonSecondary);
    textStyles.push(style.textSecondary);
  } else if (theme === "accent") {
    buttonStyle.push(style.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
