import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import ScreenSize from "../../utils/ScreenSize";
import { COLORS, FONT, IMAGES, SIZE } from "../constants";

const TopNav = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const size = ScreenSize();

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const getImageSource = (image: string | ImageSourcePropType) => {
    if (typeof image === "string") {
      return { uri: image };
    }
    return image;
  };
  const time = new Date().getTime();
  const currentTime = new Date(time).toLocaleTimeString();

  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.toLocaleString("default", { day: "numeric" });
  const year = today.getFullYear();
  const date = `${day} ${month} ${year}`;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={onChangeSearch}
      />

      <View style={styles.currentTimeContainer}>
        <Text style={styles.currentTimeItem}>{currentTime}</Text>
        <Text style={styles.currentDateItem}>{date}</Text>
      </View>

      <View style={styles.profile}>
        <Text style={styles.profileName}>John Doe</Text>
        <View style={styles.profileImageContainer}>
          <Entypo
            name="dot-single"
            size={28}
            color={COLORS.green}
            style={styles.activeDot}
          />
          <Image style={styles.avatar} source={getImageSource(IMAGES.user)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.blue,
    padding: 10,
  },
  menuButton: {
    padding: 5,
  },
  searchInput: {
    color: COLORS.black,
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width:
      ScreenSize() === "desktop" || ScreenSize() === "tablet" ? "30%" : "30%",
  },
  currentTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  currentTimeItem: {
    color: COLORS.white,
    fontSize:
      ScreenSize() === "desktop" || ScreenSize() === "tablet"
        ? SIZE.xl
        : SIZE.m,
    fontFamily: FONT.interRegular,
  },
  currentDateItem: {
    paddingTop: ScreenSize() === "desktop" || ScreenSize() === "tablet" ? 3 : 5,
    color: COLORS.white,
    fontSize:
      ScreenSize() === "desktop" || ScreenSize() === "tablet" ? SIZE.s : SIZE.s,
    fontFamily: FONT.interRegular,
  },
  profile: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    color: COLORS.white,
    marginLeft: 10,
  },
  profileImageContainer: {
    flexDirection: "row",
  },
  activeDot: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default TopNav;
