import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';


export const studentSubjectOfInterestStyles = StyleSheet.create({
    section: {
        padding: 1,
    },
    sectionTitle: {
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaBold,
        color: COLORS.white,
        marginBottom: 10,
    },
    searchInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        paddingHorizontal: 15,
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        height: 40,
        width: "50%",

    },
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    subjectTag: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
    },
    subjectText: {
        color: COLORS.darkBlue,
    fontSize: SIZE.sm,
    fontFamily: FONT.plusJakartaRegular,
    },
});