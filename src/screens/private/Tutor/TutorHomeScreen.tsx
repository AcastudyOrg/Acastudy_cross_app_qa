import React from "react";
import upcomingEventsData from '../../../../assets/data/home/upcomingEventsData.json';
import { PrivateScreenLayout } from "../../../components";
import { VIEW_MODE } from "@/constants/strings";
import EventsSection from "@/components/sections/home/EventsSection";


const TutorHomeScreen = () => {
    return (
      <PrivateScreenLayout viewMode={VIEW_MODE.tutorView}>
        <EventsSection showButton upcomingEventsData={upcomingEventsData} />
      </PrivateScreenLayout>
    );
  };

export default TutorHomeScreen;