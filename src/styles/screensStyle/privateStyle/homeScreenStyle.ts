import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";


export const homeScreenStyles = StyleSheet.create({
    //event section
    upcomingMainContainer: {
        flexDirection: 'column',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
        paddingVertical: 15,
    },
    upcomingTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    upcomingTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaMedium
    },
    upcomingActionText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaRegular,
        right: 15,
    },
    eventsMainDataContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 10,
    },
    eventsContainer: {
        flexDirection: 'row',
    },

    //subjects section
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

    //Tutors section
    tutorMainContainer: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
        paddingVertical: 15,
    },
    tutorTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2,
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
        marginRight: 10,
    },
});