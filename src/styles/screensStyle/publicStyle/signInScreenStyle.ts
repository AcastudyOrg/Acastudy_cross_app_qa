import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const signInScreenStyles = StyleSheet.create({
    signInContentContainer: {
      flex: 1,
          backgroundColor: COLORS.black,
    },
    signInKeyboardContainer: {
      flex: 1,
    },
    signInScrollingContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    signInContainer: {
      padding: Platform.OS === "ios" ? 30 : 15,
    },
    signInTitleContainer: {
      width: "100%",
      height: Platform.OS === "ios" ? 70 : 50,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    signInTitleItem: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.l,
    },
  
    //form input section
    signInFormInputContainer: {
      width: "100%",
      flexDirection: "column",
      marginBottom: Platform.OS === "ios" ? 50 : 10,
    },
    signInFormComponentContainer: {
      marginBottom: 10,
    },
    signInComponentContainer: {
      marginBottom: 20,
    },
    signInErrorTextMessage: {
      color: COLORS.red,
      fontSize: SIZE.s,
      marginTop: 5,
    },
  
    //forgot password section
    signInForgotPasswordContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    signInForgotPasswordContent: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    signInForgotPasswordText: {
      marginLeft: 10,
      color: COLORS.white,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.m,
    },
    signInForgotPasswordTextItem: {
      color: COLORS.blue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.m,
    },
  
    //submit section
    signInSubmitButtonContainer: {
      width: "100%",
      flexDirection: "column",
      marginBottom: 20,
    },
    signInQuestionContainer: {
      width: "100%",
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    signInQuestionMainText: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaRegular,
      fontSize: SIZE.m,
    },
    signInQuestionMainTextLink: {
      color: COLORS.blue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.m,
    },
  
    //third party section
    thirdPartiesContainer: {
      marginTop: 50,
      flexDirection: "column",
    },
    thirdPartiesOptionContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
  });
  