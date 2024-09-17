import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const tutorExperienceStyles = StyleSheet.create({
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaBold,
        color: COLORS.white,
        marginBottom: 10,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
    },
    experienceItem: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    companyName: {
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaBold,
        color:  COLORS.white,
        paddingBottom: 5,
    },
    period: {
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaExtraLight,
        color:  COLORS.white50Percent,
        paddingBottom: 5,
    },
    position: {
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        color: COLORS.white50Percent,
        paddingBottom: 5,
    },
    description: {
        alignItems: 'stretch',
        marginVertical: 5
    },
});