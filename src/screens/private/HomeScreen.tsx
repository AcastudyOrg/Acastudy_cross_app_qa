import React from "react";

import upcomingEventsData from '../../../assets/data/home/upcomingEventsData.json';
import subjectData from '../../../assets/data/home/subjectData.json';
import { PrivateScreenLayout } from "../../components";
import EventsSection from "../../components/sections/home/EventsSection";
import SubjectsSection from "../../components/sections/home/SubjectsSection";
import TutorSection from "../../components/sections/home/TutorSection";
import featureFlagConfig from "../../../utils/featureFlagConfig";
import { useGetTutors } from "@/graphql/hooks/user";


const HomeScreen = () => {
  const { tutors } = useGetTutors();
  return (
    <PrivateScreenLayout>
      <EventsSection upcomingEventsData={upcomingEventsData} />
      { featureFlagConfig.STUDY && <SubjectsSection subjectData={subjectData} /> }
      <TutorSection tutors={tutors} />
    </PrivateScreenLayout>
  );
};

export default HomeScreen;
