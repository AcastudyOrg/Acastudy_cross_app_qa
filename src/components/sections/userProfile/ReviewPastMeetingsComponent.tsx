import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import { STRING } from "../../../constants/strings";
import TextReviewComponent from "./TextReviewComponent";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { isMobile } from "../../../../utils/config";


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
  const screenWidth = useScreenWidth();
  const mobile = isMobile(screenWidth);
  return (
    <ScrollView horizontal={true}>
      <View style={[profileScreenStyles.table, { width: mobile ? screenWidth : screenWidth * .75 }]}>
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
            <TextReviewComponent value={row.name} />
            <TextReviewComponent value={row.subject} />
            <TextReviewComponent value={row.date} />
            <TouchableOpacity style={[profileScreenStyles.cell, profileScreenStyles.actionCell]}>
              <Text style={profileScreenStyles.actionText}>{row.review}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[profileScreenStyles.cell, profileScreenStyles.actionCell]}>
              <Text style={profileScreenStyles.actionText}>{row.rewatch}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ReviewPastMeetingsComponent;
