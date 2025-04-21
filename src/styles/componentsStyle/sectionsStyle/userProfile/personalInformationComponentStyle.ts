import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const personalInformationComponentStyles = StyleSheet.create({
    container: {
        width: "100%",
    },
    objectiveText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
    },
});