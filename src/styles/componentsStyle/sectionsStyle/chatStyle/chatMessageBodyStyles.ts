import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

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
    whichDay: {
        textAlign: "left",
        fontSize: SIZE.s,
        fontFamily: FONT.plusJakartaRegular,
        color: COLORS.white50Percent,
        paddingVertical: 10,
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