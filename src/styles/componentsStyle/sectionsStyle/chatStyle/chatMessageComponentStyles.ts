import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

const globalStyle = StyleSheet.create({
    TextContainer: {
        padding: 10,
        maxWidth: 600,
        flexGrow: 1,
        flexShrink: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    time: {
        color: COLORS.white50Percent,
        fontSize: SIZE.s,
        fontFamily: FONT.plusJakartaMedium,
    },
});

export default StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },

    leftContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
    },
    leftMessageContainer: {
        flexDirection: "row",
        alignSelf: 'flex-start',
    },
    leftTextContainer: {
        ...globalStyle.TextContainer,
        left: 5,
        borderBottomRightRadius: 8,
        backgroundColor: COLORS.darkBlue,
    },
    leftTime: {
        ...globalStyle.time,
        left: 25,
    },

    rightMessageContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-end',
    },
    rightTextContainer: {
        ...globalStyle.TextContainer,
        alignSelf: 'flex-end',
        borderBottomLeftRadius: 8,
        backgroundColor: COLORS.white10Percent,
    },
    rightSendContainer: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    rightTime: {
        ...globalStyle.time,
        right: 5,
    },

    userImageContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 24,
    },
    text: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaRegular,
    },
});