import { StyleSheet } from "react-native";
import { screenSize } from "../../../../utils/config";
import { AppColor } from "../../../constants/colors";
import { FONT, SIZE } from "../../../constants";
import { DEVICE_TYPE } from "../../../constants/strings";

const isMobile = screenSize() === DEVICE_TYPE.mobile;
export const privateScreenLayoutStyles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    flexDirection: isMobile ? "column" : "row",
    backgroundColor: AppColor.darkBlue,
  },
  contentContainer: {
    flex: 1,
    marginLeft: isMobile ? 0 : "18%",
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

  topNavMobileContainer: {
    width: "100%",
  },
  mobileScrollViewContainer: {
    height: "100%",
    paddingBottom: 60,
  },
  sidebarContainer: {
    width: screenSize() === "desktop" || screenSize() === "tablet" ? "18%" : "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    zIndex: 10,
    backgroundColor: AppColor.darkBlue,
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