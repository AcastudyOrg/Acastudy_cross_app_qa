import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ReviewIcons } from "@/components/common/ReviewIcons";
import { feedbackSectionStyles } from "@/styles/componentsStyle/sectionsStyle/home/tutorFeedbackSectionStyle";
import { COLORS } from "@/constants";
import fontFamily from "@/constants/fontFamily";

interface Feedback {
  image: string;
  title: string;
  username: string;
  message: string;
  rating: number;
}

interface FeedbackSectionProps {
  overallRating: number;
  feedbacks: Feedback[];
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ overallRating, feedbacks }) => {
  return (
    <View style={feedbackSectionStyles.container}>
      <View style={feedbackSectionStyles.header}>
        <Text style={feedbackSectionStyles.title}>Feedback</Text>
        <View style={feedbackSectionStyles.ratingContainer}>
          <Text style={feedbackSectionStyles.ratingText}>{overallRating}</Text>
          <ReviewIcons review={overallRating} iconSize={18} />
        </View>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false} style={feedbackSectionStyles.scrollView}>
        {feedbacks.map((feedback, index) => (
          <View key={index} style={feedbackSectionStyles.feedbackCard}>
            <Text style={feedbackSectionStyles.username}>{feedback.username}</Text>
            <Text style={feedbackSectionStyles.message}>{feedback.message}</Text>
            <Text style={feedbackSectionStyles.rating}>Rating: {feedback.rating}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeedbackSection;