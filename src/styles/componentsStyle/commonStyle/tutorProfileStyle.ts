import { StyleSheet } from 'react-native';
import { SIZE, COLORS, FONT } from '../../../constants';

export const tutorProfileStyles = StyleSheet.create({
    tutorProfileContainer: {
        paddingBottom: 50,
    },
    availabilitySection: {
        top: 20,
        padding: 20,
    },
    availability: {
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaBold,
        color: COLORS.white,
        bottom: 20,
    },
    personalInfoContainer: {
        marginHorizontal: 15,
    },
    personalInfoTitleContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sectionTitle: {
        fontSize: SIZE.xl,
        fontFamily: FONT.plusJakartaMedium,
        color: COLORS.white,
        marginBottom: 10,
    },
    personalInfoSaveButton: {
        right: 0,
        bottom: 5,
    },
})
