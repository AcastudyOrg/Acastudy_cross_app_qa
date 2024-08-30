import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, WEIGHT } from "../../../constants";
import { isMobile } from "../../../../utils/config";

const { height } = Dimensions.get("window");

export const onboardingScreenStyles = StyleSheet.create({
  imageBgContainer: {
    width: "100%",
    height: 'auto',
    minHeight: height / 2.5,
    resizeMode: "cover",
    overflow: "hidden",
  },
  imageContainer: {
    paddingHorizontal:
      isMobile ? 0 : 15,
  },
  imageTextContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingBottom: 15,
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
    width: isMobile ? "100%" : "70%",
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.m,
  },
  componentContainer: {
    gap: 2,
  },
  infoSectionContainer: {
    gap: isMobile ? 30 : 30,
    paddingTop: 20,
    paddingHorizontal:
      isMobile ? 15 : 27,
  },
  searchContainer: {
    width: isMobile ? "80%" : "50%",
    minWidth: isMobile ? "auto" : 480,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: COLORS.lightGray,
  },
  searchTextContainer: {
    width: isMobile ? "45%" : "75%",
  },
  searchButtonContainer: {
    width: isMobile ? "35%" : "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
