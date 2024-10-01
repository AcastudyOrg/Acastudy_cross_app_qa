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
        paddingHorizontal: "2.2%",
    },
    tutorTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaMedium,
        fontWeight: "bold",
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
        paddingHorizontal: "2%",
    },
    tutorMainScreenContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 15, 
        left: 25,
    }
});