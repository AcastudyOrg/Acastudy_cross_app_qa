import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { ReviewIcons } from "@/components/common/ReviewIcons";
import { feedbackSectionStyles } from "@/styles/componentsStyle/sectionsStyle/home/tutorFeedbackSectionStyle";
import { COLORS, FONT } from "@/constants";
import useScreenWidth from "@/hooks/useScreenWidth";
import { homeTileScreenWidth } from "utils/config";
import { Feedback } from "@/screens/private/Tutor/TutorHomeScreen";

interface FeedbackSectionProps {
	overallRating: number;
	feedbacks: Feedback[];
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ overallRating, feedbacks }) => {
	const screenWidth = useScreenWidth();
	const containerWidth = homeTileScreenWidth(screenWidth);
	return (
		<View style={feedbackSectionStyles.container}>
			<View style={feedbackSectionStyles.header}>
				<Text style={feedbackSectionStyles.title}>Feedback</Text>
				<View style={feedbackSectionStyles.ratingContainer}>
					<Text style={feedbackSectionStyles.ratingText}>{overallRating}</Text>
					<ReviewIcons review={overallRating} iconSize={18} />
				</View>
			</View>
			{feedbacks.length === 0 ? (
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text style={{ color: COLORS.lightGray, fontFamily: FONT.plusJakartaBold }}>
						No unseen feedbacks yet!
					</Text>
				</View>
			) : (
				<ScrollView showsVerticalScrollIndicator={false} style={feedbackSectionStyles.scrollView}>
					{feedbacks.map((feedback, index) => (
						<View key={index} style={feedbackSectionStyles.feedbackCard}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
								<View style={{ flex: 1, flexDirection: 'row' }}>
									<Image
										source={{ uri: feedback.image }}
										style={[feedbackSectionStyles.image, { width: containerWidth * .22 }]}
										resizeMode="cover" />
									<View style={{ flex: 1, marginLeft: 10 }}>
										<Text style={feedbackSectionStyles.title}>{feedback.title}</Text>
										<Text style={feedbackSectionStyles.username}>{feedback.username}</Text>
									</View>

								</View>
								<ReviewIcons review={feedback.rating} iconSize={12} />
							</View>
							<Text numberOfLines={1} style={feedbackSectionStyles.message}>{feedback.message} </Text>

						</View>
					))}
				</ScrollView>
			)}

		</View>
	);
};

export default FeedbackSection;