import { COLORS, FONT, SIZE } from "@/constants";
import { StyleSheet } from "react-native";


export const warningModelStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.transparent50percent,

    },
    modalContainer: {
        padding: 20,
        width: '90%',
        maxWidth: 380,
        backgroundColor: COLORS.skyBlue,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    copyInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: SIZE.xxxl,
        fontFamily: FONT.plusJakartaBold,
        marginBottom: 40,
        color: COLORS.white,
    },
    description: {
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaMedium,
        marginBottom: 40,
        color: COLORS.white,
    },
    ctaButtons: {
        flexDirection: 'row',
        gap: 12,
        paddingBottom: 10,
    },
    PositiveButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: COLORS.red50Percent,
        padding: 12,
        borderRadius: 8,
    },
    NegativeButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: COLORS.lightGrayOpacity,
        padding: 12,
        borderRadius: 8,
    },
    btnText: {
        color: COLORS.white,
        fontFamily: FONT.plusJakartaMedium,
        fontSize: SIZE.l,
    },
});