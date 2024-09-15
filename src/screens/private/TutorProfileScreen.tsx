import PrivateScreenLayout from "../../components/layout/PrivateScreenLayout";
import TutorHeader from "../../components/sections/tutorProfile/TutorHeader";
import { tutorData } from "../../../mockData/TutorData";
import React from "react";
import TutorBio from "../../components/sections/tutorProfile/TutorBio";
import TutoSubjectOfInterest from "../../components/sections/tutorProfile/TutorSubjectOfInterest";

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
        </PrivateScreenLayout>
    );
}

export default TutorProfileScreen;