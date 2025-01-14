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
  requestButtonMobileStyle:{
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 50,

    position: 'relative',
    bottom: 125,
    left: 50,

    shadowColor: COLORS.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .5,
    shadowRadius: 8,
    elevation: 2,
},

floatingRequestButton: {
  position: "absolute",
  bottom: 70,
  right: 20,
  width: 50,
  height: 50,
  backgroundColor: COLORS.white,
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
  shadowColor: COLORS.white,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
  elevation: 5,
},
});