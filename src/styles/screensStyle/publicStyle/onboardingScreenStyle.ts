import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZE, WEIGHT } from "../../../constants";

const { width, height } = Dimensions.get("window");
export const onboardingScreenStyles = StyleSheet.create({
    onboardingContainer: {
      flex: 1,
      backgroundColor: COLORS.black,
    },
    buttonSubContainer: {
      width: "100%",
      paddingTop: 20,
      paddingLeft: "63%",
      marginRight: 5,
    },
    buttonSubContent: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    onboardingSliderContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    onboardingSliderImage: {
      width: width * 0.8,
      height: height * 0.5,
      resizeMode: "contain",
      marginBottom: 20,
    },
    onboardingSliderTitle: {
      fontSize: SIZE.xxxl,
      fontWeight: WEIGHT.bold,
      color: COLORS.white,
      textAlign: "center",
      marginBottom: 10,
    },
    onboardingSliderDescription: {
      fontSize: 16,
      color: COLORS.gray,
      textAlign: "center",
    },
  });