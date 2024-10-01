import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const ReviewTutorstyles = StyleSheet.create({
    section: {
        top: 20,
        padding: 20,
    },
    innerSection: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    sectionTitle: {
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaBold,
        color: COLORS.white,
        bottom: 20,
    },
    ratingContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    overallRating: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.white,
        marginRight: 15,
    },
    starsContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        marginRight: 15,
    },
    totalReviews: {
        paddingTop: 10,
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
    },
    reviewBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
    },
    starText: {
        color: COLORS.white,
        width: 20,
        marginRight: 10,
        textAlign: 'right',
    },
    barContainer: {
        flex: 1,
        height: 10,
        backgroundColor: COLORS.midGrayOpacity,
        borderRadius: 4,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    barFill: {
        height: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 4,
    },
    countText: {
        color: COLORS.darkGrayOpacity,
        textAlign: 'left',
    },
    makeRow: {
        flexDirection: 'row',
    },
});