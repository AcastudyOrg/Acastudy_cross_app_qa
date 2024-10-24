import React from "react";
import { View, Text } from "react-native";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface DateTimeComponentProps {
    date: string;
    rsvp: number;
    duration: string;
  }
  
  const StudyDateTime: React.FC<DateTimeComponentProps> = ({ date, rsvp, duration }) => (
    <View style={studyFeedStyles.feedTopTextDateContainer}>
      <View style={studyFeedStyles.feedTopTextDateRsvpContainer}>
        <Text numberOfLines={1} style={studyFeedStyles.feedTopTextTimeItem}>
          {date}
        </Text>
        <Text numberOfLines={1} style={studyFeedStyles.feedTopTextTimeItem}>
          RSVP: {rsvp}
        </Text>
      </View>
      <View style={studyFeedStyles.feedTopTextTimeContainer}>
        <Text numberOfLines={1} style={studyFeedStyles.feedTopTextTimeItem}>
          {duration}
        </Text>
      </View>
    </View>
  );

export default StudyDateTime