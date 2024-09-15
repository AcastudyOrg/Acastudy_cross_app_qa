import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, WEIGHT } from "../../../constants";

export const onboardingScreenStyles = StyleSheet.create({
  imageBgContainer: {
    width: "100%",
    height: "auto",
    minHeight:  600,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
    padding: 50,
  },
  imageTextContainer: {
    flex: 1,
    paddingBottom: 25,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 5,
  },
  imageTitleItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaExtraBold,
    fontWeight: WEIGHT.bold,
    fontSize: SIZE.xxxl,
  },
  imageTextInfoItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.xl,
    lineHeight: 30,
  },
  componentContainer: {
    gap: 2,
    top: 20,
  },
  infoSectionContainer: {
    gap: 60,
    paddingTop: 20,
    paddingBottom: 60
  },
  searchContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: COLORS.lightGray,
  },
  searchTextContainer: {
    width: "60%",
  },
  searchButtonContainer: {
    width: 100,
  },
});
