import { StyleSheet } from "react-native";
import { COLORS, SIZE, WEIGHT } from "../../../constants";

export const queryResponseComponentStyle = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 25,
    },
    responseImageItem: {
      width: 200,
      height: 200,
      resizeMode: "cover",
    },
    responseTitleText: {
      marginVertical: 20,
      color: COLORS.white,
      fontSize: SIZE.xxxl,
      fontWeight: WEIGHT.bold,
    },
    responseMessageText: {
      color: COLORS.white,
      fontSize: SIZE.m,
      fontWeight: WEIGHT.thin,
      textAlign: "center",
    },
  });