import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, WEIGHT } from "../../../constants";
import { AppColor } from "../../../constants/colors";

const { height } = Dimensions.get("window");

export const onboardingScreenStyles = StyleSheet.create({
  imageBgContainer: {
    width: "100%",
    height: height / 2.5,
    resizeMode: "cover",
    overflow: "hidden",
  },
  imageContainer: {
    paddingHorizontal:
      Platform.OS === "ios" || Platform.OS === "android" ? 0 : 15,
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
    fontSize: SIZE.xxl,
  },
  imageTextInfoItem: {
    width: Platform.OS === "ios" || Platform.OS === "android" ? "100%" : "70%",
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.s,
  },
  componentContainer: {
    gap: 2,
  },
  infoSectionContainer: {
    gap: Platform.OS === "ios" || Platform.OS === "android" ? 30 : 30,
    paddingTop: 20,
    paddingHorizontal:
      Platform.OS === "ios" || Platform.OS === "android" ? 15 : 27,
  },
  searchContainer: {
    width: Platform.OS === "ios" || Platform.OS === "android" ? "80%" : "50%",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: AppColor.lightGray,
  },
  searchTextContainer: {
    width: Platform.OS === "ios" || Platform.OS === "android" ? "45%" : "75%",
  },
  searchButtonContainer: {
    width: Platform.OS === "ios" || Platform.OS === "android" ? "35%" : "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
