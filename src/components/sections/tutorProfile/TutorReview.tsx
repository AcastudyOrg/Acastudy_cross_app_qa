import React from 'react';
import { View, Text } from 'react-native';
import CustomIcon from '../../common/CustomIcon';
import { ReviewTutorstyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorReviewStyles';

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

export default TutorReviews;
