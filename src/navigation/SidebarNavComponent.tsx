import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FONT, SIZE, COLORS, ICONS } from "../constants";

const SidebarNavComponent = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const links = [
    { name: "Home", link: "HomeScreen", icon: ICONS.homeIcon },
    { name: "Study", link: "StudyScreen", icon: ICONS.studyIcon },
    { name: "Calls", link: "CallsScreen", icon: ICONS.callsIcon },
    { name: "Chats", link: "ChatsScreen", icon: ICONS.chatsIcon },
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
      <View style={styles.sidebarBottomContainer}>
        <TouchableOpacity style={styles.sidebarBottomItemContainer}>
          <Text style={styles.sidebarBottomItem}>Request tutor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarMainContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.red,
  },
  sidebarTopContainer: {
    width: "100%",
  },
  sidebarMediaContainer: {
    height: 25,
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
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  sidebarLinksItemsContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    gap: 20,
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  sidebarBottomItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
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
