import React, { useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { getImageSource, screenSize } from "../../utils/config";
import { COLORS, FONT, IMAGES, SIZE } from "../constants";

const TopNav = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentTime, setCurrentTime] = React.useState("");
  const [date, setDate] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setDate(formatDate(now));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: any) => {
    const day = date.toLocaleString("default", { day: "numeric" });
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
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

      <View style={styles.lineDivider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "column",
    padding: 10,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal:
      screenSize() === "desktop" || screenSize() === "tablet" ? 20 : 0,
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
      screenSize() === "desktop" || screenSize() === "tablet" ? "30%" : "30%",
  },
  currentTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  currentTimeItem: {
    color: COLORS.white,
    fontSize:
      screenSize() === "desktop" || screenSize() === "tablet"
        ? SIZE.xl
        : SIZE.m,
    fontFamily: FONT.interRegular,
  },
  currentDateItem: {
    paddingTop: screenSize() === "desktop" || screenSize() === "tablet" ? 5 : 0,
    color: COLORS.white,
    fontSize:
      screenSize() === "desktop" || screenSize() === "tablet" ? SIZE.s : SIZE.s,
    fontFamily: FONT.interRegular,
  },
  profile: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    color: COLORS.white,
    marginLeft: 10,
  },
  profileImageContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  activeDot: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  lineDivider: {
    width: "100%",
    alignSelf: "center",
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
  },
});

export default TopNav;
