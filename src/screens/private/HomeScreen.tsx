import React from "react";

import upcomingEventsData from '../../../assets/data/home/upcomingEventsData.json';
import subjectData from '../../../assets/data/home/subjectData.json';
import tutorData from '../../../assets/data/home/tutorData.json';
import { PrivateScreenLayout } from "../../components";
import EventsSection from "../../components/sections/home/EventsSection";
import SubjectsSection from "../../components/sections/home/SubjectsSection";
import TutorSection from "../../components/sections/home/TutorSection";


const HomeScreen = () => {
  return (
    <PrivateScreenLayout>
      <EventsSection showView={true} upcomingEventsData={upcomingEventsData} />
      <SubjectsSection showView={true} subjectData={subjectData} />
      <TutorSection showView={true} tutorData={tutorData} />
    </PrivateScreenLayout>
  );
};

export default HomeScreen;
