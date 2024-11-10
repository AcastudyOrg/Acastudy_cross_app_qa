import { StyleSheet } from "react-native";
import { COLORS, SIZE, FONT } from "../../../../constants";
import { isPlatformIOSorAndroid } from "../../../../../utils/config";

export const becomeWhatAtAcaStudyStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    justifyContent: "space-between",
    gap: 6,
  },
  imageContainer: {
    paddingTop: 10,
  },
  imageItem: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "column",
    gap: 10,
  },
  titleText: {
    color: COLORS.white,
    fontSize: SIZE.xxxl,
    fontFamily: FONT.plusJakartaBold,
  },
  infoTextContainer: {
    flexDirection: "column",
    paddingBottom: 20,
  },
  subtitleText: {
    color: COLORS.white,
    fontSize: SIZE.xl,
    fontFamily: FONT.plusJakartaBold,
  },
  infoText: {
    color: COLORS.white,
    fontSize: SIZE.xl,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  extraInfoText: {
    paddingTop: 10,
    color: COLORS.white,
    fontSize: SIZE.xl,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  buttonContainer: {
    width: isPlatformIOSorAndroid() ? "auto" : 250,
    paddingTop: 10,
  },
});
