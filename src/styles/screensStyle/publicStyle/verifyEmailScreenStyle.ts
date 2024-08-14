import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const verifyEmailScreenStyles = StyleSheet.create({
    verifyContentContainer: {
      flex: 1,
      backgroundColor: COLORS.black,
    },
    verifyKeyboardContainer: {
      flex: 1,
    },
    verifyScrollingContainer: {
      flexGrow: 1,
      paddingHorizontal: 20,
    },
    verifyContainer: {
      padding: Platform.OS === "ios" ? 30 : 15,
    },
    verifyNavigatorContainer: {
      width: "100%",
      flexDirection: "column",
    },
    // Title section
    verifyTitleContainer: {
      marginTop: 120,
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
    verifyTitleItem: {
      color: COLORS.white,
      fontSize: SIZE.xxxl,
      fontFamily: FONT.plusJakartaBold,
    },
    verifyInfoTextItem: {
      marginTop: 15,
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
      textAlign: "center",
    },
  
    // OTP input section
    otpInputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 40,
    },
    otpInput: {
      width: 50,
      height: 50,
      borderColor: COLORS.white,
      borderWidth: 1,
      borderRadius: 10,
      textAlign: "center",
      color: COLORS.white,
      fontSize: SIZE.l,
      fontFamily: FONT.plusJakartaRegular,
    },
    errorText: {
      color: COLORS.red,
      marginTop: 10,
      textAlign: "center",
    },
    expiryText: {
      marginTop: 20,
      color: COLORS.white,
      textAlign: "center",
      fontSize: SIZE.s,
    },
    timerText: {
      marginTop: 30,
      color: COLORS.white,
      textAlign: "center",
      fontSize: SIZE.m,
    },
  
    // Submit button section
    submitButtonContainer: {
      marginTop: 20,
    },
  });