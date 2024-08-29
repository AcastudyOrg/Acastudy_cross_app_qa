import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const topicsHeaderStyles = StyleSheet.create({
    topicsHeaderContainer: {
        paddingVertical: 20,
        paddingHorizontal: "2%",
    },
    topicsHeaderText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaBold,
    },
    topicsHeaderRow: {
        top: 5,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    dropDownContainer: {
        width: "30%",
        paddingRight: 20,
    },
    clearFilterButton: {
        width: 140,
    },
});