import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const editProfileModel = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.transparent50percent,
    },
    modelCantainer: {
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
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    imageTextContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageText: {
        color: COLORS.purple,
        marginBottom: 15
    },
    imageImage: {
        width: 100, height: 100, borderRadius: 50, marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.transparent,
        backgroundColor: COLORS.lightGrayOpacity,
        borderRadius: 8,
        width: '100%',
        padding: 10,
        marginBottom: 20,
        color: COLORS.white,
    },
    buttonsContainer: {
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
        backgroundColor: COLORS.purple,
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: 'bold'
    }
});