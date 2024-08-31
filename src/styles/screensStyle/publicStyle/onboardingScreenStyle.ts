import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, WEIGHT } from "../../../constants";
import { isMobile } from "../../../../utils/config";

const { height } = Dimensions.get("window");

export const onboardingScreenStyles = StyleSheet.create({
  imageBgContainer: {
    width: "100%",
    height: isMobile ? "auto" : 600,
    minHeight: height / 2.5,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
    padding: 50,
  },
  imageContainer: {
    paddingHorizontal: isMobile ? 0 : 15,
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
    width: isMobile ? "100%" : "60%",
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
    paddingBottom: 60,
    paddingHorizontal: isMobile ? 15 : 27,
  },
  searchContainer: {
    width: isMobile ? "80%" : "50%",
    minWidth: isMobile ? "auto" : 480,
    paddingVertical: 8,
    paddingHorizontal: 20,
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
