import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export const tutorExperienceStyles = StyleSheet.create({
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
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
        fontSize: 14,
        fontWeight: 'bold',
        color:  COLORS.white,
        paddingBottom: 5,
    },
    period: {
        fontSize: 14,
        color:  COLORS.white50Percent,
        paddingBottom: 5,
    },
    position: {
        fontSize: 14,
        color: COLORS.white50Percent,
        paddingBottom: 5,
    },
    description: {
        alignItems: 'stretch',
        marginVertical: 5
    },
});