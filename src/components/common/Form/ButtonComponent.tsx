import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ButtonProps } from "../../../types";
import { buttonComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/buttonComponentStyle";

const ButtonComponent = ({ text, onPress, icon }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonComponentStyles.buttonContainer}>
      <View style={buttonComponentStyles.buttonContent}>
        {icon && <View style={buttonComponentStyles.iconContainer}>{icon}</View>}
        <Text style={buttonComponentStyles.buttonTextItem}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
