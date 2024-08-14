import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const signUpScreenStyles = StyleSheet.create({
    signUpContentContainer: {
      flex: 1,
      backgroundColor: COLORS.black,
    },
    signUpKeyboardContainer: {
      flex: 1,
    },
    signUpScrollingContainer: {
      flexGrow: 1,
    },
    signUpContainer: {
      padding: Platform.OS === "ios" ? 30 : 15,
    },
    signUpTitleContainer: {
      width: "100%",
      height: Platform.OS === "ios" ? 70 : 50,
      flexDirection: "column",
    },
    signUpTitleItem: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.xxxl,
    },
  
    //form input section
    signUpFormInputContainer: {
      width: "100%",
      flexDirection: "column",
      marginBottom: Platform.OS === "ios" ? 50 : 10,
    },
    signUpFormComponentContainer: {
      marginBottom: 10,
    },
    signUpComponentContainer: {
      marginBottom: 20,
    },
    signUpErrorTextMessage: {
      color: COLORS.red,
      fontSize: SIZE.s,
      marginTop: 5,
    },
  
    //submit section
    signUpSubmitButtonContainer: {
      width: "100%",
      flexDirection: "column",
    },
    signUpQuestionContainer: {
      width: "100%",
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    signUpQuestionMainText: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaRegular,
      fontSize: SIZE.m,
    },
    signUpQuestionMainTextLink: {
      color: COLORS.blue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.m,
    },
  
    //third party section
    thirdPartyContainer: {
      marginTop: 50,
      flexDirection: "column",
    },
    thirdPartyOptionContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
  });