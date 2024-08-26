import React from "react";
import { Platform, View } from "react-native";

import { onboardingScreenStyles } from "../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import subjectData from "../../../assets/data/home/subjectData.json";
import upcomingEventsData from "../../../assets/data/home/upcomingEventsData.json";

import {
  BecomeWhatAtAcaStudyComponent,
  OnboardingTopImageComponent,
  PublicScreenLayout,
} from "../../components";
import SubjectsSection from "../../components/sections/home/SubjectsSection";
import EventsSection from "../../components/sections/home/EventsSection";

const OnboardingScreen = () => {
  const becomeStudentImage =
    Platform.OS === "web"
      ? "../../../assets/images/appImages/student.jpg"
      : require("../../../assets/images/appImages/student.jpg");
  const becomeTutorImage =
    Platform.OS === "web"
      ? "../../../assets/images/appImages/studentTutor.jpg"
      : require("../../../assets/images/appImages/studentTutor.jpg");

  return (
    <PublicScreenLayout>
      <View style={onboardingScreenStyles.componentContainer}>
        <View style={onboardingScreenStyles.imageContainer}>
          <OnboardingTopImageComponent />
        </View>

        <SubjectsSection showView={false} subjectData={subjectData} />
        <EventsSection
          showView={false}
          upcomingEventsData={upcomingEventsData}
        />
      </View>

      <View style={onboardingScreenStyles.infoSectionContainer}>
        <BecomeWhatAtAcaStudyComponent
          switchRow={false}
          image={becomeStudentImage}
          title="Become A Student"
          firstSubtitle="Unlock Your Full Potential with Acastudy"
          firstInfo="At Acastudy, we provide more than just tutoring—we offer personalized learning experiences designed to help you excel academically and personally. With top-rated tutors, tailored sessions, and a supportive community, we guide you to unlock your true potential."
          secondSubtitle="Join us and gain access to:"
          secondInfo="Customized one-on-one tutoring sessions that inspire growth. Comprehensive study tools and resources at your fingertips. A vibrant community of peers and mentors to support your journey. Take the next step—don’t just study, Acastudy!"
          buttonText="Sign up as a Student"
          onClick={() => console.log("sign up as a Student")}
        />

        <BecomeWhatAtAcaStudyComponent
          switchRow={true}
          image={becomeTutorImage}
          title="Become A Tutor"
          firstSubtitle="Transform Lives with Your Expertise on Acastudy"
          firstInfo="Are you passionate about teaching? Acastudy provides you with a platform to connect with eager students, earn competitive income, and share your knowledge while growing professionally."
          secondSubtitle="Earn 70% of session fees."
          secondInfo="Share your expertise with a wide, motivated audience. Access professional growth opportunities within a supportive community. Start making a difference today."
          extraInfo="Sign up now as a tutor on Acastudy and empower students with your expertise!"
          buttonText="Sign up as a Tutor"
          onClick={() => console.log("sign up as a Tutor")}
        />
      </View>
    </PublicScreenLayout>
  );
};

export default OnboardingScreen;
