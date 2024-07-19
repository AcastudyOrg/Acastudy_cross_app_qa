import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { FONT, SIZE, COLORS, ICONS } from "../constants";

const SidebarNavComponent = () => {
  const navigation = useNavigation();

  const links = [
    { name: "Home", link: "HomeScreen", icon: ICONS.homeIcon },
    { name: "Study", link: "StudyScreen", icon: ICONS.studyIcon },
    { name: "Calls", link: "CallScreen", icon: ICONS.callsIcon },
    { name: "Chats", link: "ChatScreen", icon: ICONS.chatsIcon },
    { name: "Profile", link: "ProfileScreen", icon: ICONS.profileIcon },
  ];

  return (
    <View style={styles.sidebarMainContainer}>
      <View style={styles.sidebarTopContainer}>
        <View style={styles.sidebarMediaContainer}>
          <Text style={styles.sidebarMediaItem}>ACASTUDY</Text>
        </View>

        <View style={styles.sidebarLinksContainer}>
          {links.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.sidebarLinksItemsContainer}
              onPress={() => navigation.navigate(item.link as never)}
            >
              <Image source={item.icon} style={styles.sidebarLinksIconItem} />
              <Text style={styles.sidebarLinksItems}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Pressable
        onPress={() => console.log("request tutor")}
        style={styles.sidebarBottomContainer}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.sidebarBottomItemContainer}
        >
          <Text style={styles.sidebarBottomItem}>Request tutor</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarMainContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: `rgba(0,0,0,0.2)`,
  },
  sidebarTopContainer: {
    width: "100%",
  },
  sidebarMediaContainer: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarMediaItem: {
    color: COLORS.white,
    fontFamily: FONT.interBold,
    fontSize: SIZE.l,
  },
  sidebarLinksContainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  sidebarLinksItemsContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    gap: 15,
  },
  sidebarLinksIconItem: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  sidebarLinksItems: {
    color: COLORS.white,
    fontFamily: FONT.interRegular,
    fontSize: SIZE.m,
  },
  sidebarBottomContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    zIndex: 1,
  },
  sidebarBottomItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: COLORS.gray,
  },
  sidebarBottomItem: {
    color: COLORS.white,
    fontFamily: FONT.interRegular,
    fontSize: SIZE.sm,
  },
});

export default SidebarNavComponent;
