import { StyleSheet, Platform } from "react-native";
import { COLORS,SIZE, FONT } from "../../../../constants";

export const tutorSectionStyles = StyleSheet.create({
    tutorMainContainer: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 15,
    },
    tutorTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 17 : 29,
    },
    tutorTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaMedium
    },
    tutorActionText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaRegular,
        right: 15,
    },
    tutorMainDataContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
    },
});