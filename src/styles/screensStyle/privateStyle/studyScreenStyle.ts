import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const studyScreenStyles = StyleSheet.create({
    homeMainContainer: {
        flex: 1,
    },
    detailsDivider: {
        width: "95%",
        height: 0.5,
        backgroundColor: COLORS.white,
        alignSelf: "center",
        marginVertical: 5,
        opacity: 0.2
    },
});
