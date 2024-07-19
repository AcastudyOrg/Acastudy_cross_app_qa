import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { links } from "../../assets/data/navigationLinks";

import { COLORS, FONT, SIZE } from "../constants";

const BottomMobileNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTabMainContainer}>
      {links.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate(item.link as never)}
          style={styles.bottomTabContentContainer}
        >
          <Image source={item.icon} style={styles.sidebarLinksIconItem} />
          <Text style={styles.bottomTabItem}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabMainContainer: {
    flex: 1,
    position: "absolute",
    bottom: -30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 60,
    height: 80,
    backgroundColor: `rgba(0,0,0,0.2)`,
  },
  sidebarLinksIconItem: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  bottomTabContentContainer: {
    flexDirection: "column",
    paddingRight: 60,
  },
  bottomTabItem: {
    paddingTop: 5,
    fontSize: SIZE.s,
    color: COLORS.white,
    fontFamily: FONT.interRegular,
  },
});

export default BottomMobileNavigation;
