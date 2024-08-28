import { StyleSheet, Platform } from "react-native";
import { COLORS, SIZE, FONT } from "../../../../constants";

export const subjectsSectionStyles = StyleSheet.create({
    subjectMainContainer: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 15,
    },
    subjectTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: "2.2%",
    },
    subjectTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaMedium
    },
    subjectActionText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaRegular,
        right: 15,
    },
    subjectMainDataContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: "2%",
    },
});