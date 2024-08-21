import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ButtonProps } from "../../../types";
import { buttonComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/buttonComponentStyle";
import { LinearGradient } from "expo-linear-gradient";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { COLORS } from "../../../constants";
import CustomIcon from "../CustomIcon";

const ButtonComponent = ({ text, onPress, icon }: ButtonProps) => {
  const screenWidth = useScreenWidth();
  const isNarrowScreen = screenWidth <= 780;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[COLORS.darkPurple, COLORS.purple, COLORS.darkPurple]}
        style={buttonComponentStyles.buttonContainer}
      >
        {isNarrowScreen && text === "Request tutor" ? (
          <CustomIcon set="FontAwesome5" name="hands-helping" />
        ) : (
          <View>
            {icon ?
              <View style={buttonComponentStyles.iconContainer}>{icon}</View> :
              <Text style={buttonComponentStyles.buttonTextItem}> {text}</Text>
            }
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};


export default ButtonComponent;
