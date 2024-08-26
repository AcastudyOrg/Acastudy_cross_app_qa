import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ButtonProps } from "../../../types";
import { buttonComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/buttonComponentStyle";
import { COLORS } from "../../../constants";
import { AppColor } from "../../../constants/colors";

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onPress,
  icon,
  primary = true,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[
        primary ? AppColor.darkPurple : COLORS.darkBlue,
        primary ? AppColor.purple : COLORS.darkBlue,
        primary ? AppColor.darkPurple : COLORS.darkBlue,
      ]}
       style={buttonComponentStyles.buttonContainer}
    >
      <TouchableOpacity
        onPress={onPress}
      >
        <View style={buttonComponentStyles.buttonContent}>
          {icon && (
            <View style={buttonComponentStyles.iconContainer}>{icon}</View>
          )}
          <Text style={buttonComponentStyles.buttonTextItem}>{text}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ButtonComponent;
