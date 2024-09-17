import PrivateScreenLayout from "../../components/layout/PrivateScreenLayout";
import TutorHeader from "../../components/sections/tutorProfile/TutorHeader";
import { tutorData } from "../../../mockData/TutorData";
import React from "react";
import TutorBio from "../../components/sections/tutorProfile/TutorBio";
import TutoSubjectOfInterest from "../../components/sections/tutorProfile/TutorSubjectOfInterest";
import TutorExperience from "../../components/sections/tutorProfile/TutorsExperience";
import EventsSection from "../../components/sections/home/EventsSection";
import TutorReviews from "../../components/sections/tutorProfile/TutorReview";


const TutorProfileScreen = () => {
    return (
        <PrivateScreenLayout showBackButton={true} showSearchBar={false}>
            <TutorHeader
                name={tutorData.name}
                rating={tutorData.rating}
                reviews={tutorData.reviews}
                imageUrl={tutorData.imageUrl}
            />
            <TutorBio text={tutorData.bio} />
            <TutoSubjectOfInterest subjects={tutorData.subjects}/>
            <TutorExperience experiences={tutorData.experiences} />
            <EventsSection upcomingEventsData={tutorData.upcomingEvents} showViewMoreButton={tutorData.upcomingEvents.length > 4}/>
            <TutorReviews rating={tutorData.rating} reviewCounts={tutorData.reviewCounts} />
        </PrivateScreenLayout>
    );
}

export default TutorProfileScreen;