import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export default StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputContainer: {
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: COLORS.white10Percent,
    },
    sendContainer: {
        width: 100,
    },
});