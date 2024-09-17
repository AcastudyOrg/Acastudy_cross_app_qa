import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Star } from 'lucide-react-native';
import CustomIcon from '../../common/CustomIcon';
import { COLORS } from '../../../constants';

interface ReviewsProps {
    rating: number;
    reviewCounts: Record<string, number>;
}

const TutorReviews: React.FC<ReviewsProps> = ({ rating, reviewCounts }) => {
    const totalReviews = Object.values(reviewCounts).reduce((a, b) => a + b, 0);

    return (
        <View style={ReviewTutorstyles.section}>
            <Text style={ReviewTutorstyles.sectionTitle}>Reviews</Text>
            <View style={ReviewTutorstyles.makeRow}>
                <View>
                    <View style={ReviewTutorstyles.ratingContainer}>
                        <Text style={ReviewTutorstyles.overallRating}>{rating.toFixed(1)}</Text>
                        <View style={ReviewTutorstyles.starsContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                star <= Math.round(rating) ? (
                                    <CustomIcon key={star} size={18} set={'Ionicons'} name={'star'} />
                                ) : (
                                    <CustomIcon key={star} size={18} set={'Ionicons'} name={'star-outline'}
                                    />
                                )
                            ))}
                        </View>
                        <Text style={ReviewTutorstyles.totalReviews}>{totalReviews} reviews</Text>
                    </View>
                </View>
                <View>
                    {Object.entries(reviewCounts)
                        .sort(([a], [b]) => Number(b) - Number(a))
                        .map(([stars, count]) => (
                            <View style={ReviewTutorstyles.makeRow}>
                                <View key={stars} style={ReviewTutorstyles.reviewBar}>
                                    <Text style={ReviewTutorstyles.starText}>{stars}</Text>
                                    <View style={ReviewTutorstyles.barContainer}>
                                        <View
                                            style={[ ReviewTutorstyles.barFill, { width: `${(count / totalReviews) * 100}%` } ]}
                                        />
                                    </View>
                                </View>
                                <Text style={ReviewTutorstyles.countText}>{count} %</Text>
                            </View>
                        ))}
                </View>
            </View>
        </View>
    );
};

const ReviewTutorstyles = StyleSheet.create({
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
        color: '#ffffff',
        marginBottom: 10,
    },
    ratingContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    overallRating: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff',
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
        color: '#ffffff',
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
        backgroundColor: '#FFFFFF',
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

export default TutorReviews;
