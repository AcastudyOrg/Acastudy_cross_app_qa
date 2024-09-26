import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";

interface ReviewPastMeetingsProps {
  data: string[][];
}

const ReviewPastMeetingsComponent: React.FC<ReviewPastMeetingsProps> = ({
  data,
}) => {
  return (
    <View style={profileScreenStyles.table}>
      <View style={profileScreenStyles.tableHeader}>
        <Text
          style={[
            profileScreenStyles.headerCell,
            profileScreenStyles.tableText,
          ]}
        >
          Tutor
        </Text>
        <Text
          style={[
            profileScreenStyles.headerCell,
            profileScreenStyles.tableText,
          ]}
        >
          Subject
        </Text>
        <Text
          style={[
            profileScreenStyles.headerCell,
            profileScreenStyles.tableText,
          ]}
        >
          Date
        </Text>
        <Text
          style={[
            profileScreenStyles.headerCell,
            profileScreenStyles.tableText,
          ]}
        >
          Review
        </Text>
        <Text
          style={[
            profileScreenStyles.headerCell,
            profileScreenStyles.tableText,
          ]}
        >
          Rewatch
        </Text>
      </View>

      {data.map((row: string[], index: number) => (
        <View key={index} style={profileScreenStyles.tableRow}>
          <Text
            style={[profileScreenStyles.cell, profileScreenStyles.tableText]}
          >
            {row[0]} {/* Tutor */}
          </Text>
          <Text
            style={[profileScreenStyles.cell, profileScreenStyles.tableText]}
          >
            {row[1]} {/* Subject */}
          </Text>
          <Text
            style={[profileScreenStyles.cell, profileScreenStyles.tableText]}
          >
            {row[2]} {/* Date */}
          </Text>
          <TouchableOpacity
            style={[profileScreenStyles.cell, profileScreenStyles.actionCell]}
          >
            <Text style={profileScreenStyles.actionText}>{row[3]}</Text>
            {/* Review */}
          </TouchableOpacity>
          <TouchableOpacity
            style={[profileScreenStyles.cell, profileScreenStyles.actionCell]}
          >
            <Text style={profileScreenStyles.actionText}>{row[4]}</Text>
            {/* Rewatch */}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ReviewPastMeetingsComponent;
