
import React from "react";
import { Text, View } from "react-native";

import TutorBio from "../../../components/sections/tutorProfile/TutorBio";
import TutoSubjectOfInterest from "../../../components/sections/tutorProfile/TutorSubjectOfInterest";
import TutorExperience from "../../../components/sections/tutorProfile/TutorsExperience";
import EventsSection from "../../../components/sections/home/EventsSection";
import TutorReviews from "../../../components/sections/tutorProfile/TutorReview";
import PrivateScreenLayout from "../../../components/layout/PrivateScreenLayout";
import TutorHeader from "../../../components/sections/tutorProfile/TutorHeader";
import { tutorData } from "../../../../mockData/TutorData";
import { tutorProfileStyles } from "../../../styles/componentsStyle/commonStyle/tutorProfileStyle";
import { AvailablilityCalender } from "../../../components/common/AvailablilityCalender";
import CustomNoStrokeTextInput from "@/components/common/Form/CustomNoStrokeTextInput";
import SubjectOfInterest from "@/components/sections/userProfile/SubjectOfInterest";

interface TutorProfileScreenProps {

}
const TutorProfileEditebleScreen: React.FC<TutorProfileScreenProps> = ({ }) => {

    const [biography, setBiography] = React.useState<string>("");

    return (
        <PrivateScreenLayout showBackButton={true} showSearchBar={false}>
            <View style={tutorProfileStyles.tutorProfileContainer}>
                <TutorHeader
                    name={tutorData.name}
                    rating={tutorData.rating}
                    reviews={tutorData.reviews}
                    imageUrl={tutorData.imageUrl}
                />
                <CustomNoStrokeTextInput
                    value={biography}
                    label={"Bio"}
                    placeholder={tutorData?.bio}
                    multiline={true}
                    onChange={setBiography}
                />
                <SubjectOfInterest refetch={() => { }} subjects={tutorData.subjects} showSubjectOfInterestPlaceholder={true}/>

                <TutorExperience experiences={tutorData.experiences} showExperiencePlaceholder/>
                <EventsSection upcomingEventsData={tutorData.upcomingEvents} showViewMoreButton={tutorData.upcomingEvents.length > 4} />
                <TutorReviews rating={tutorData.rating} reviewCounts={tutorData.reviewCounts} />

                <View style={tutorProfileStyles.availabilitySection}>
                    <Text style={tutorProfileStyles.availability}>Availability</Text>
                    <View>
                        <AvailablilityCalender
                            onDateSelect={() => { }}
                            selectedTutor={tutorData.bookedOutDates || undefined}
                            minDate={new Date().toISOString().split('T')[0]}
                        />
                    </View>
                </View>
            </View>
        </PrivateScreenLayout >
    );
}

export default TutorProfileEditebleScreen;