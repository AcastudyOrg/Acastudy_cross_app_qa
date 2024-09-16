import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { FONT, SIZE } from "../../../constants";

export const privateScreenLayoutStyles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
    paddingHorizontal: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
  },
  childrenScrollView: {
    flexGrow: 1
  },
  topNavContainer: {
    flex: 1,
    width: "100%",
  },
  mainContent: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
  },

  logoMobileImage: {
    width: 200,
    height: 67,
    resizeMode: 'contain',
  },
  topNavMobileContainer: {
    width: "100%",
  },
  mobileScrollViewContainer: {
    height: "100%",
    paddingBottom: 60,
  },
  sidebarContainer: {
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    zIndex: 10,
    backgroundColor: COLORS.darkBlue,
  },
  sidebarMediaContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarMediaItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaBold,
    fontSize: SIZE.xxl,
  },
});