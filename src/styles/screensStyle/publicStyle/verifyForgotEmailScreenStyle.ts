import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const verifyForgotEmailScreenStyles = StyleSheet.create({
    verifyForgotContentContainer: {
      flex: 1,
      backgroundColor: COLORS.black,
    },
    verifyForgotKeyboardContainer: {
      flex: 1,
    },
    verifyForgotScrollingContainer: {
      flexGrow: 1,
      paddingHorizontal: 20,
    },
    verifyForgotContainer: {
      padding: Platform.OS === "ios" ? 30 : 15,
    },
    verifyForgotNavigatorContainer: {
      width: "100%",
      flexDirection: "column",
    },
    // Title section
    verifyForgotTitleContainer: {
      marginTop: 120,
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
    verifyForgotTitleItem: {
      color: COLORS.white,
      fontSize: SIZE.xxxl,
      fontFamily: FONT.plusJakartaBold,
    },
    verifyForgotInfoTextItem: {
      marginTop: 15,
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
      textAlign: "center",
    },
  
    // OTP input section
    otpForgotInputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 40,
    },
    otpForgotInput: {
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
    errorForgotText: {
      color: COLORS.red,
      marginTop: 10,
      textAlign: "center",
    },
    expiryForgotText: {
      marginTop: 20,
      color: COLORS.white,
      textAlign: "center",
      fontSize: SIZE.s,
    },
    timerForgotText: {
      marginTop: 30,
      color: COLORS.white,
      textAlign: "center",
      fontSize: SIZE.m,
    },
  
    // Submit button section
    submitForgotButtonContainer: {
      marginTop: 20,
    },
  });