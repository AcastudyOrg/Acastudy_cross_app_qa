import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    scrollContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    scrollView: {
        paddingTop: 10,
        paddingBottom: 50,
    },

    footerContainer: {
        flexShrink: 0,
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: COLORS.skyBlue,
    },
    divider: {
        paddingBottom: 10,
    },
});