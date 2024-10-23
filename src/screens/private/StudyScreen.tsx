import React from "react";
import { View } from "react-native";

import { PrivateScreenLayout } from "../../components";
import StudyFeedComponent from "../../components/sections/study/StudyFeedComponent";
import { studyScreenStyles } from "../../styles/screensStyle/privateStyle/studyScreenStyle";
import { mockStudyFeedData } from "../../../mockData/FeedData";

const StudyScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={studyScreenStyles.homeMainContainer}>
      {mockStudyFeedData.map((entry) => (
        <StudyFeedComponent entry={entry} />
      ))}
      </View>
    </PrivateScreenLayout>
  );
};

export default StudyScreen;
