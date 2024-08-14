import { StyleSheet, Platform } from "react-native";
import { COLORS,SIZE, FONT } from "../../../../constants";

export const subjectsSectionStyles = StyleSheet.create({
    subjectMainContainer: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
        paddingVertical: 15,
    },
    subjectTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2,
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
        marginRight: 10,
    },
});