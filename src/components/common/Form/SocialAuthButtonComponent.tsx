import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { SocialAuthButtonProps } from "../../../types";
import { socialAuthButtonComponentStyle } from "../../../styles/componentsStyle/commonStyle/formStyle/socialAuthButtonComponentStyle";

const SocialAuthButtonComponent = ({
  text,
  iconName,
  iconLibrary,
  onPress,
  size,
  color,
}: SocialAuthButtonProps) => {
  const renderIcon = () => {
    switch (iconLibrary) {
      case "AntDesign":
        return (
          <AntDesign
            name={iconName as keyof typeof AntDesign.glyphMap}
            size={size}
            color={color}
          />
        );
      case "Entypo":
        return (
          <Entypo
            name={iconName as keyof typeof Entypo.glyphMap}
            size={size}
            color={color}
          />
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={socialAuthButtonComponentStyle.thirdPartyOptionContent}>
      <View style={socialAuthButtonComponentStyle.thirdPartyNameItemContainer}>
        {text && <Text style={socialAuthButtonComponentStyle.thirdPartyNameItem}>{text}</Text>}
        {renderIcon()}
      </View>
    </TouchableOpacity>
  );
};

export default SocialAuthButtonComponent;