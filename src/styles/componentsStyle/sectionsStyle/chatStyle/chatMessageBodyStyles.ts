import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    scrollContainer: {
        flexGrow: 1,
        backgroundColor: COLORS.red,
    },
    scroll: {
        padding: 10,
    },

    footerContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: COLORS.skyBlue,
    },
    divider: {
        paddingBottom: 10,
    },
});