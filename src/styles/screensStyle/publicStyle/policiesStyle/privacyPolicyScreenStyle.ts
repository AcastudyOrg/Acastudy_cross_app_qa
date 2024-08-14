import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const privacyPolicyScreenStyles = StyleSheet.create({
    privacyMainContentContainer: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: COLORS.black,
    },
    privacyNavigatorContainer: {
      width: "100%",
    },
    privacyTitleContainer: {
      marginTop: 20,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    privacyTitleItem: {
      color: COLORS.darkBlue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.xxxl,
      marginBottom: 20,
    },
    privacyLastUpdateContainer: {
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    privacyLastUpdateTextItem: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaRegular,
      fontSize: SIZE.sm,
      marginBottom: 20,
    },
    privacySubtitleItem: {
      color: COLORS.darkBlue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.xl,
      marginBottom: 10,
    },
    privacySubtitleItems: {
      color: COLORS.darkBlue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.l,
      marginBottom: 10,
    },
  
    //info section
    privacyMainInfoContainer: {
      width: "100%",
      flexDirection: "column",
      marginBottom: 20,
    },
    privacyMainSubtitleTextItem: {
      color: COLORS.darkBlue,
      fontFamily: FONT.plusJakartaBold,
      fontSize: SIZE.xxl,
      marginBottom: 10,
    },
    privacyInfoTextItem: {
      color: COLORS.white,
      fontFamily: FONT.plusJakartaRegular,
      fontSize: SIZE.sm,
      marginBottom: 10,
    },
    privacyUnorderListContainer: {
      width: "100%",
      justifyContent: "center",
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    privacyUnorderListContent: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginVertical: 2,
    },
    privacyBulletPoint: {
      color: COLORS.white,
      fontSize: SIZE.s,
      marginRight: 10,
    },
    privacyListItemText: {
      color: COLORS.white,
      fontSize: SIZE.sm,
      marginBottom: 5,
    },
    privacyLinkItem: {
      color: COLORS.blue,
    },
  
    //scroll to top
    privacyScrollTopContainer: {
      position: "absolute",
      bottom: 20,
      right: 20,
    },
    privacyScrollToTopContent: {
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: COLORS.darkBlue,
    },
  });