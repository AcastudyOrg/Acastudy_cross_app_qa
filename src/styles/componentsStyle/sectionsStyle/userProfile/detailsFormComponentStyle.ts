import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

export const detailsFormComponentStyles = StyleSheet.create({
    detailsFormRow: {
        paddingTop: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    detailsInputContainer: {
        width: "48%",
    },
    detailsDivider: {
        width: "100%",
        height: .5,
        backgroundColor: COLORS.white,
    },
});