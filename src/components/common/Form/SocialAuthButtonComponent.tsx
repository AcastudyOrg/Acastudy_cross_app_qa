import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { COLORS, FONT, SIZE } from "../../../constants";
import { SocialAuthButtonProps } from "../../../types";

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
    <TouchableOpacity onPress={onPress} style={styles.thirdPartyOptionContent}>
      <View style={styles.thirdPartyNameItemContainer}>
        {text && <Text style={styles.thirdPartyNameItem}>{text}</Text>}
        {renderIcon()}
      </View>
    </TouchableOpacity>
  );
};

export default SocialAuthButtonComponent;

const styles = StyleSheet.create({
  thirdPartyOptionContent: {
    width: "48%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: COLORS.gray,
  },
  thirdPartyNameItemContainer: {
    width: "auto",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  thirdPartyNameItem: {
    marginRight: 10,
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.interRegular,
  },
});
