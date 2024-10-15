import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const studentSubjectOfInterestStyles = StyleSheet.create({
    section: {
        padding: 1,
        gap: 10
    },
    sectionTitle: {
        fontSize: SIZE.xl,
        fontFamily: FONT.plusJakartaMedium,
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
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    subjectText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaRegular,
        marginRight: 5,
    },
    removeButton: {
        marginLeft: 5,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButtonText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        lineHeight: 20,
    },
});