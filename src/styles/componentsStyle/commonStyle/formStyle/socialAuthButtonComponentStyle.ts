import { StyleSheet } from "react-native";
import { COLORS, SIZE, FONT } from "../../../../constants";

export const socialAuthButtonComponentStyle = StyleSheet.create({
    thirdPartyOptionContent: {
      width: "48%",
      paddingVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: COLORS.gray,
    },
    thirdPartyNameItemContainer: {
      width: "auto",
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    thirdPartyNameItem: {
      marginRight: 10,
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
    },
  });
  