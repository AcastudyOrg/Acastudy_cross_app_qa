import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

const { width } = Dimensions.get('window');


const containerWidth = width > 900 ? width * .18 : 160;
export const tutorComponentStyles = StyleSheet.create({
    tutorContentContainer: {
        flex: 1,
        width: containerWidth,
        paddingHorizontal: containerWidth * .1,
        paddingVertical: 20,
        marginRight: 15,
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGrayOpacity,
        gap: 15,
    },
    tutorImageContainer: {
        flexDirection: 'column',
    },
    tutorImageItem: {
        width: containerWidth * .3,
        height: containerWidth * .3,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    tutorOnline: {
        zIndex: 1,
        position: "absolute",
        bottom: 5,
        left: 4,
    },
    tutorNameContainer: {
        width: '100%',
        flexDirection: 'column',
        gap: 5,
    },
    tutorNameItem: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaMedium,
        textAlign: 'center',
    },
    tutorSubjectItem: {
        color: COLORS.lightCardGray,
        fontSize: SIZE.s,
        fontFamily: FONT.plusJakartaBold,
        textAlign: 'center',
    },

    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flexWrap: 'nowrap',
        paddingHorizontal: 10,
    },

    sessions: {
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 1,
    },
    sessionText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        opacity: 0.5,
    },
    sessionValueText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaMedium,
    },

    rating: {
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 1,
    },
    ratingText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        opacity: 0.5,
    },
    ratingValueText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaMedium,
    },
})
