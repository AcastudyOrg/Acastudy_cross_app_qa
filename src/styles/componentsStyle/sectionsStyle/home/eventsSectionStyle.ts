import { StyleSheet } from "react-native";
import { COLORS,SIZE, FONT } from "../../../../constants";

export const eventsSectionStyles = StyleSheet.create({
    upcomingMainContainer: {
        flexDirection: 'column',
        paddingBottom: 15,
    },
    upcomingTextContainer: {
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: "2.2%",
    },
    upcomingTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaMedium,
        fontWeight: 'bold',
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
        paddingHorizontal: "2%",
    },
    eventsContainer: {
        flexDirection: 'row',
    },
});