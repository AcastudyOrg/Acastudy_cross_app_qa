import React from "react";
import { View } from "react-native";

import { PrivateScreenLayout } from "../../components";
import StudyFeedComponent from "../../components/sections/study/StudyFeedComponent";
import { studyScreenStyles } from "../../styles/screensStyle/privateStyle/studyScreenStyle";
import EventsSection from "../../components/sections/home/EventsSection";
import upcomingEventsData from "../../../assets/data/home/upcomingEventsData.json";

const StudyScreen = () => {
  return (
    <PrivateScreenLayout>
      <EventsSection upcomingEventsData={upcomingEventsData} />
      <View style={studyScreenStyles.detailsDivider} />
      <StudyFeedComponent />
    </PrivateScreenLayout>
  );
};

export default StudyScreen;
