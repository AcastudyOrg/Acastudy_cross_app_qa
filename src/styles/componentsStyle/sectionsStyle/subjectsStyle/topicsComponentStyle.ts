import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const topicsComponentStyles = StyleSheet.create({
    topicsComponentContainer: {
        width: "49.5%",
        height: 55,
        borderRadius: 5,
        justifyContent: "center",
        paddingHorizontal: 20,
        flexDirection: "column",
        backgroundColor: COLORS.skyBlue,
    },
    topicsComponentTitle: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaBold,
    },
    topicsComponentRow: {
        top: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    topicsComponentText: {
        color: COLORS.white,
        fontSize: SIZE.s,
        fontFamily: FONT.plusJakartaExtraLight,
    },
});