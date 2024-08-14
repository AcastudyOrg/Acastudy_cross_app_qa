import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";


export const setNewForgotPasswordScreenStyles = StyleSheet.create({
    passwordNewContentContainer: {
      flex: 1,
      backgroundColor: COLORS.black,
    },
    passwordNewKeyboardContainer: {
      flex: 1,
    },
    passwordNewScrollingContainer: {
      flexGrow: 1,
      paddingHorizontal: 20,
    },
    passwordNewContainer: {
      padding: Platform.OS === "ios" ? 30 : 15,
    },
    passwordNewNavigatorContainer: {
      width: "100%",
      flexDirection: "column",
    },
    passwordNewTitleContainer: {
      marginTop: 120,
      marginBottom: 30,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    passwordNewTitleItem: {
      color: COLORS.white,
      fontSize: SIZE.xxxl,
      fontFamily: FONT.plusJakartaBold,
      marginBottom: 10,
    },
    passwordNewTitle: {
      paddingHorizontal: 10,
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
      textAlign: "center",
    },
  
    //form section
    passwordNewFormContainer: {
      marginVertical: 30,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    passwordNewFormComponentContainer: {
      marginBottom: 10,
    },
    passwordNewComponentContainer: {
      marginBottom: 20,
    },
    passwordNewErrorTextMessage: {
      color: COLORS.red,
      fontSize: SIZE.s,
      marginTop: 5,
    },
  
    //submit section
    passwordNewSubmitButtonContainer: {
      width: "100%",
      flexDirection: "column",
      marginBottom: 20,
    },
  });
  