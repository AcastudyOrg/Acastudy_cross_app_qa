import { StyleSheet, Platform } from "react-native";
import { COLORS,SIZE, FONT } from "../../../../constants";

export const eventsSectionStyles = StyleSheet.create({
    upcomingMainContainer: {
        flexDirection: 'column',
        paddingVertical: 15,
    },
    upcomingTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 17 : 29,
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
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
    },
    eventsContainer: {
        flexDirection: 'row',
    },
});