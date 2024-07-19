import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { links } from "../../assets/data/navigationLinks";
import { COLORS, FONT, SIZE } from "../constants";

const BottomMobileNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.bottomTabMainContainer}>
      {links.map((item, i) => {
        const isActive = route.name === item.link;
        return (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate(item.link as never)}
            style={styles.bottomTabContentContainer}
          >
            <Image source={item.icon} style={styles.sidebarLinksIconItem} />
            <Text
              style={[
                styles.bottomTabItem,
                { color: isActive ? COLORS.purple : COLORS.white },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabMainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 60,
    height: 80,
    backgroundColor: `rgba(0,0,0,0.2)`,
    position: "absolute",
    bottom: -30,
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
    fontFamily: FONT.interRegular,
  },
});

export default BottomMobileNavigation;
