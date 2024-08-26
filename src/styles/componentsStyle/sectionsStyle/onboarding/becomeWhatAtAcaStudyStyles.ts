import { StyleSheet, Platform, Dimensions } from "react-native";
import { COLORS, SIZE, FONT } from "../../../../constants";

const { width } = Dimensions.get("window");

export const becomeWhatAtAcaStudyStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    justifyContent: "space-between",
    gap: 6,
    paddingBottom: Platform.OS === "ios" || Platform.OS === "android" ? 0 : 20,
  },
  imageContainer: {
    paddingTop: Platform.OS === "ios" || Platform.OS === "android" ? 10 : 0,
    width: Platform.OS === "ios" || Platform.OS === "android" ? "100%" : "48%",
  },
  imageItem: {
    width: "100%",
    height: Platform.OS === "ios" || Platform.OS === "android" ? 180 : 230,
  },
  textContainer: {
    width: Platform.OS === "ios" || Platform.OS === "android" ? "100%" : "48%",
    flexDirection: "column",
    gap: Platform.OS === "ios" || Platform.OS === "android" ? 10 : 8,
  },
  titleText: {
    color: COLORS.white,
    fontSize:
      Platform.OS === "ios" || Platform.OS === "android" ? SIZE.xl : SIZE.l,
    fontFamily: FONT.plusJakartaBold,
  },
  infoTextContainer: {
    flexDirection: "column",
  },
  subtitleText: {
    color: COLORS.white,
    fontSize:
      Platform.OS === "ios" || Platform.OS === "android" ? SIZE.sm : SIZE.s,
    fontFamily: FONT.plusJakartaBold,
  },
  infoText: {
    color: COLORS.white,
    fontSize:
      Platform.OS === "ios" || Platform.OS === "android" ? SIZE.sm : SIZE.s,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  extraInfoText: {
    paddingTop: 10,
    color: COLORS.white,
    fontSize:
      Platform.OS === "ios" || Platform.OS === "android" ? SIZE.sm : SIZE.s,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  buttonContainer: {
    width:
      Platform.OS === "ios" || Platform.OS === "android" ? width / 2 : "45%",
    paddingTop: 10,
  },
});
