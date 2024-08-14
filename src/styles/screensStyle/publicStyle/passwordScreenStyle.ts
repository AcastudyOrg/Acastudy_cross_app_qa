import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const passwordScreenStyles = StyleSheet.create({
    passwordContentContainer: {
      flex: 1,
      backgroundColor: COLORS.black,
    },
    passwordKeyboardContainer: {
      flex: 1,
    },
    passwordScrollingContainer: {
      flexGrow: 1,
      paddingHorizontal: 20,
    },
    passwordContainer: {
      padding: Platform.OS === "ios" ? 30 : 15,
    },
    passwordNavigatorContainer: {
      width: "100%",
      flexDirection: "column",
    },
    passwordImagePickerContainer: {
      height: 140,
      marginVertical: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  
    //form section
    passwordFormContainer: {
      marginVertical: 30,
      flexDirection: "column",
    },
    passwordFormComponentContainer: {
      marginBottom: 10,
    },
    passwordComponentContainer: {
      marginBottom: 20,
    },
    passwordErrorTextMessage: {
      color: COLORS.red,
      fontSize: SIZE.s,
      marginTop: 5,
    },
  
    //submit section
    passwordSubmitButtonContainer: {
      width: "100%",
      flexDirection: "column",
      marginBottom: 20,
    },
    passwordQuestionContainer: {
      width: "100%",
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    passwordQuestionMainText: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaRegular,
      fontSize: SIZE.m,
      textAlign: "center",
    },
    passwordQuestionMainTextLink: {
      color: COLORS.blue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.m,
    },
  });
  