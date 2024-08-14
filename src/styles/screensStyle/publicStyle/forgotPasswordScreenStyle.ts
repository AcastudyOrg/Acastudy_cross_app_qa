import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const forgotPasswordScreenStyles = StyleSheet.create({
    forgotContentContainer: {
      flex: 1,
      backgroundColor: COLORS.black,
    },
    forgotKeyboardContainer: {
      flex: 1,
    },
    forgotScrollingContainer: {
      flexGrow: 1,
      paddingHorizontal: 20,
    },
    forgotSafeAreaContainer: {
      flex: 1,
    },
    forgotNavigatorContainer: {
      width: "100%",
      flexDirection: "column",
    },
  
    //illustration section
    forgotImageIllustrationContainer: {
      width: "100%",
      marginTop: 30,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    forgotImageIllustrationItem: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    forgotTopTextContainer: {
      marginTop: 10,
      marginBottom: 30,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    forgotTopTitleTextItem: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.xxxl,
      marginBottom: 10,
    },
    forgotTopTextItem: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaRegular,
      fontSize: SIZE.l,
    },
  
    //form section
    forgotFormContainer: {
      width: "100%",
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    forgotInputContainer: {
      marginBottom: 10,
    },
    forgotErrorTextMessage: {
      color: COLORS.red,
      fontSize: SIZE.s,
      marginTop: 5,
    },
    forgotButtonContainer: {
      width: "100%",
      marginTop: 20,
    },
  
    //redirect section
    forgotRedirectContainer: {
      position: "absolute",
      bottom: Platform.OS === "ios" ? 30 : 10,
      flexDirection: "row",
      alignSelf: "center",
    },
    forgotRedirectTextItem: {
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
    },
    forgotRedirectLinkTextItem: {
      marginLeft: 5,
      color: COLORS.darkBlue,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaBold,
    },
  
    // Modal styles
    forgotModalContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
      backgroundColor: COLORS.black,
    },
    forgotModalActionContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    forgotModalActionContent: {
      justifyContent: "center",
      alignItems: "center",
    },
    forgotModalImageContainer: {
      width: "100%",
      marginVertical: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    forgotModalImageItem: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    forgotModalTextContainer: {
      paddingHorizontal: 20,
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    forgotModalTextItem: {
      color: COLORS.white,
      fontSize: SIZE.xxxl,
      fontFamily: FONT.plusJakartaBold,
      marginBottom: 20,
    },
    forgotModalInfoTextItem: {
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
      textAlign: "center",
    },
    forgotModalInfoTextBold: {
      fontFamily: FONT.plusJakartaBold,
    },
    forgotModalButtonContainer: {
      width: "100%",
      marginTop: 20,
      marginBottom: 30,
    },
    forgotModalResendCodeContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    forgotModalResendCodeTextItem: {
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
    },
  });
  