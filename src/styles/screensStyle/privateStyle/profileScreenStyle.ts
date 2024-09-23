import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const profileScreenStyles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  titleTextItem: {
    fontFamily: FONT.plusJakartaExtraBold,
    color: COLORS.white,
    fontSize: SIZE.xl,
    paddingBottom: 20,
  },
  upcomingItemContainer: {
    width: "100%",
    flexDirection: "row",
  },
  upcomingItemContentContainer: {
    flexDirection: "column",
    paddingRight: 20,
    gap: 15,
  },
  upcomingImageItem: {
    resizeMode: "cover",
    borderRadius: 10,
  },
  upcomingTitleContainer: {
    flexDirection: "column",
    gap: 3,
  },
  upcomingTitleItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaMedium,
    fontSize: SIZE.m,
  },
  upcomingInfoItem: {
    color: COLORS.textGray,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: Platform.OS === "web" ? SIZE.xs : SIZE.s,
    opacity: 0.7,
  },
});
