import { StyleSheet, Platform, Dimensions } from "react-native";
import { COLORS, SIZE, FONT } from "../../../../constants";
import { isMobile } from "../../../../../utils/config";

const { width } = Dimensions.get("window");



export const becomeWhatAtAcaStudyStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    justifyContent: "space-between",
    gap: 6,
    paddingBottom: isMobile ? 0 : 20,
  },
  imageContainer: {
    paddingTop: isMobile ? 10 : 0,
    width: isMobile ? "100%" : "48%",
  },
  imageItem: {
    width: "100%",
    height: isMobile ? 180 : 370,
  },
  textContainer: {
    width: isMobile ? "100%" : "48%",
    flexDirection: "column",
    gap: isMobile ? 10 : 8,
  },
  titleText: {
    color: COLORS.white,
    fontSize: isMobile ? SIZE.xxl : SIZE.xxxl,
    fontFamily: FONT.plusJakartaBold,
  },
  infoTextContainer: {
    flexDirection: "column",
    paddingBottom: 20,
  },
  subtitleText: {
    color: COLORS.white,
    fontSize: isMobile ? SIZE.m : SIZE.xl,
    fontFamily: FONT.plusJakartaBold,
  },
  infoText: {
    color: COLORS.white,
    fontSize: isMobile ? SIZE.m : SIZE.xl,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  extraInfoText: {
    paddingTop: 10,
    color: COLORS.white,
    fontSize: isMobile ? SIZE.m : SIZE.xl,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  buttonContainer: {
    width:
      isMobile ? width / 2 : "45%",
    minWidth: isMobile ? 'auto' : 200,
    paddingTop: 10,
  },
});
