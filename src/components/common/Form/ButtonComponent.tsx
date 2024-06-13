import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ButtonProps } from "../../../types";
import { COLORS, SIZE, WEIGHT } from "../../../constants";

const ButtonComponent = ({ text, onPress, icon }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={styles.buttonTextItem}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkBlue,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 2,
  },
  buttonTextItem: {
    color: COLORS.white,
    fontSize: SIZE.xl,
    fontWeight: WEIGHT.medium,
  },
});

export default ButtonComponent;
