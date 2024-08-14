import { StyleSheet } from "react-native";
import { screenSize } from "../../../../utils/config";
import { AppColor } from "../../../constants/colors";
import { FONT, SIZE } from "../../../constants";

export const privateScreenLayoutStyles = StyleSheet.create({
    layoutContainer: {
      flex: 1,
      backgroundColor: AppColor.darkBlue,
    },
    topNavContainer: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "82%",
    },
    topNavMobileContainer: {
      width: "100%",
    },
    contentContainer: {
      flex: 1,
      flexDirection: "column",
      position: "relative",
    },
    sidebarContainer: {
      width:
        screenSize() === "desktop" || screenSize() === "tablet" ? "18%" : "0%",
      height: "100%",
      overflow: "hidden",
      position: "absolute",
      zIndex: 10,
      backgroundColor: AppColor.darkBlue,
    },
    mainContent: {
      flex: 1,
      height: "100%",
      paddingHorizontal: 10,
    },
    sidebarMediaContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    sidebarMediaItem: {
      color: AppColor.white,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.xxl,
    },
  });