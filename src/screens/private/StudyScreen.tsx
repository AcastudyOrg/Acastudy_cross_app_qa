import React from "react";
import { View } from "react-native";

import { PrivateScreenLayout } from "../../components";
import StudyFeedComponent from "../../components/sections/study/StudyFeedComponent";
import { studyScreenStyles } from "../../styles/screensStyle/privateStyle/studyScreenStyle";

const StudyScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={studyScreenStyles.homeMainContainer}>
        <StudyFeedComponent />
      </View>
    </PrivateScreenLayout>
  );
};

export default StudyScreen;
