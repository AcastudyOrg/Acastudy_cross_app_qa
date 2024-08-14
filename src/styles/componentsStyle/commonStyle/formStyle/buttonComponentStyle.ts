import { StyleSheet } from "react-native";
import { COLORS, SIZE, WEIGHT } from "../../../../constants";

export const buttonComponentStyles = StyleSheet.create({
    buttonContainer: {
      width: "100%",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.darkBlue,
    },
    buttonContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconContainer: {
      marginRight: 2,
    },
    buttonTextItem: {
      color: COLORS.white,
      fontSize: SIZE.xl,
      fontWeight: WEIGHT.medium,
    },
  });
  