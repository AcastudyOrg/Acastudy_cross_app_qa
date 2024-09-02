import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const termsOfUseScreenStyles = StyleSheet.create({
    termsMainContentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.black,
    },
    termsNavigatorContainer: {
        width: "100%",
    },
    termsTitleContainer: {
        marginTop: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    termsMainTitleItem: {
        color: COLORS.darkBlue,
        fontFamily: FONT.plusJakartaBold,
        fontSize: SIZE.xxxl,
        marginBottom: 10,
    },
    termsLastUpdateContainer: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    termsLastUpdateTextItem: {
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        fontSize: SIZE.sm,
        marginBottom: 20,
    },
    termsSubtitleItem: {
        color: COLORS.white,
        fontFamily: FONT.plusJakartaBold,
        fontSize: SIZE.xl,
        marginBottom: 20,
    },

    //info section
    termsMainInfoContainer: {
        width: "100%",
        flexDirection: "column",
        marginBottom: 20,
    },
    termsMainSubtitleTextItem: {
        color: COLORS.darkBlue,
        fontFamily: FONT.plusJakartaBold,
        fontSize: SIZE.xxl,
        marginBottom: 10,
    },
    termsInfoTextItem: {
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        fontSize: SIZE.sm,
        marginBottom: 10,
    },
    termsUnorderListContainer: {
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    termsUnorderListContent: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 2,
    },
    termsBulletPoint: {
        color: COLORS.white,
        fontSize: SIZE.s,
        marginRight: 10,
    },
    termsListItemText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        marginBottom: 5,
    },

    //scroll to top
    termsScrollTopContainer: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    termsScrollToTopContent: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: COLORS.darkBlue,
    },
});
