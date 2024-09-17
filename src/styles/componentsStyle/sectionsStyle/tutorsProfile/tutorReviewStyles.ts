import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export const ReviewTutorstyles = StyleSheet.create({
    section: {
        padding: 20,
    },
    innerSection: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 10,
    },
    ratingContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    overallRating: {
        fontSize: 48,
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
        fontSize: 16,
    },
    reviewBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        width: 200,
    },
    starText: {
        color: COLORS.white,
        width: 20,
        marginRight: 10,
        textAlign: 'right',
    },
    barContainer: {
        flex: 1,
        height: 8,
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