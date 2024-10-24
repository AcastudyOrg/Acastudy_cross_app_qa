import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    footerContainer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        padding: 10,
    },
    divider: {
        paddingVertical: 10,
    },
});