import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const experienceModelStyles = StyleSheet.create({
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
        backgroundColor: COLORS.darkBlue,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.white,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 5,
        color: COLORS.white,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: COLORS.transparent,
        borderRadius: 5,
        height: 40,
        padding: 10,
    },
    ctaButtons: {
        flexDirection: 'row',
        gap: 12,
        paddingBottom: 10,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: COLORS.lightGrayOpacity,
        padding: 12,
        borderRadius: 8,
    },
});