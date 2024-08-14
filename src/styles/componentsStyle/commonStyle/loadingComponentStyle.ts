import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, WEIGHT } from "../../../constants";

export const loadingComponentStyle = StyleSheet.create({
    loaderContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 25,
      backgroundColor: COLORS.black,
    },
    loaderImageItem: {
      width: 200,
      height: 200,
      resizeMode: "cover",
    },
    loaderTitleText: {
      marginVertical: 20,
      color: COLORS.white,
      fontSize: SIZE.xxxl,
      fontFamily: FONT.plusJakartaBold,
    },
    loaderMessageText: {
      color: COLORS.white,
      fontSize: SIZE.m,
      fontWeight: WEIGHT.thin,
      textAlign: "center",
    },
  });
  