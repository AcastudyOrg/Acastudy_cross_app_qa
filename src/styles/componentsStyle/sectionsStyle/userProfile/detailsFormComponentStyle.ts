import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const detailsFormComponentStyles = StyleSheet.create({
    detailsFormRow: {
        paddingTop: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    detailsInputContainer: {
        width: "100%",
    },
    inputContainer: {
        width: "48%",
    },
    detailsDivider: {
        width: "100%",
        height: .5,
        backgroundColor: COLORS.white,
    },
    personalInfoTitleContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    personalInfoTitle: {
        color: COLORS.white,
        fontSize: SIZE.xl,
        fontFamily: FONT.plusJakartaMedium,
        paddingBottom: 10,
    },
    objectivesContainer: {
        width: "100%",
        top: 10,
    },
    personalInfoSaveButton: {
        bottom: 5,
        cursor: "pointer",
    },
});