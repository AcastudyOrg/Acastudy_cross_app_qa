import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import { STRING } from "../../../constants/strings";
import TextReviewComponent from "./TextReviewComponent";


interface ReviewPastMeetingsProps {
  data: {
    name: string,
    subject: string,
    date: string,
    review: string,
    rewatch: string
  }[];
}

const ReviewPastMeetingsComponent: React.FC<ReviewPastMeetingsProps> = ({ data }) => {
  return (
    <View style={profileScreenStyles.table}>
      <View style={profileScreenStyles.tableHeader}>
        {STRING.reviewTableHeadings.map((heading, index) => (
          <Text key={index}
            style={[
              profileScreenStyles.headerCell,
              profileScreenStyles.headerText,
            ]}
          >
            {heading}
          </Text>
        ))}
      </View>

      {data.map((row, index) => (
        <View key={index} style={profileScreenStyles.tableRow}>
          <TextReviewComponent value={row.name}/>
          <TextReviewComponent value={row.subject}/>
          <TextReviewComponent value={row.date}/>
          <TouchableOpacity style={[profileScreenStyles.cell, profileScreenStyles.actionCell]}>
            <Text style={profileScreenStyles.actionText}>{row.review}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[profileScreenStyles.cell, profileScreenStyles.actionCell]}>
            <Text style={profileScreenStyles.actionText}>{row.rewatch}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ReviewPastMeetingsComponent;
