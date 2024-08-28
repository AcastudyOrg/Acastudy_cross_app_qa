import React from "react";
import { View } from "react-native";

import { onboardingScreenStyles } from "../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import subjectData from "../../../assets/data/home/subjectData.json";
import upcomingEventsData from "../../../assets/data/home/upcomingEventsData.json";

import { BecomeWhatAtAcaStudyComponent, BannerComponent, PublicScreenLayout } from "../../components";
import SubjectsSection from "../../components/sections/home/SubjectsSection";
import EventsSection from "../../components/sections/home/EventsSection";
import { STRING } from "../../constants/strings";
import { IMAGES } from "../../constants";

const OnboardingScreen = () => {
  return (
    <PublicScreenLayout>
      <View style={onboardingScreenStyles.componentContainer}>
        <View style={onboardingScreenStyles.imageContainer}>
          <BannerComponent />
        </View>

        <SubjectsSection showView={false} subjectData={subjectData} />
        <EventsSection showView={false}  upcomingEventsData={upcomingEventsData} />
      </View>

      <View style={onboardingScreenStyles.infoSectionContainer}>
        <BecomeWhatAtAcaStudyComponent
          switchRow={false}
          image={IMAGES.student}
          title={STRING.OnbordingBecomeAStudentTittle}
          firstSubtitle={STRING.OnbordingBecomeAStudentFirstSubtitle}
          firstInfo={STRING.OnbordingBecomeAStudentFirstInfo}
          secondSubtitle={STRING.OnbordingBecomeAStudentSecondSubtitle}
          secondInfo={STRING.OnbordingBecomeAStudentSecondInfo}
          buttonText={STRING.OnbordingBecomeAStudentButtonText}
          extraInfo=""
          onClick={() => console.log("sign up as a Student")}
        />

        <BecomeWhatAtAcaStudyComponent
          switchRow={true}
          image={IMAGES.studentTutor}
          title={STRING.OnbordingBecomeATutor}
          firstSubtitle={STRING.OnbordingBecomeATutorFirstSubtitle}
          firstInfo={STRING.OnbordingBecomeAStudentFirstInfo}
          secondSubtitle={STRING.OnbordingBecomeATutorSecondSubtitle}
          secondInfo={STRING.OnbordingBecomeATutorSecondInfo}
          extraInfo={STRING.OnbordingBecomeATutorSecondInfoExtraInfo}
          buttonText={STRING.OnbordingBecomeATutorButtonText}
          onClick={() => console.log("sign up as a Tutor")}
        />
      </View>
    </PublicScreenLayout>
  );
};

export default OnboardingScreen;
