import PrivateScreenLayout from "../../components/layout/PrivateScreenLayout";
import TutorHeader from "../../components/sections/tutorProfile/TutorHeader";
import { tutorData } from "../../../mockData/TutorData";
import React from "react";
import TutorBio from "../../components/sections/tutorProfile/TutorBio";
import TutoSubjectOfInterest from "../../components/sections/tutorProfile/TutorSubjectOfInterest";
import TutorExperience from "../../components/sections/tutorProfile/TutorsExperience";
import EventsSection from "../../components/sections/home/EventsSection";
import TutorReviews from "../../components/sections/tutorProfile/TutorReview";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CustomCalendar from "../../components/common/CustomCalendar";
import { Text, View } from "react-native";
import { tutorProfileStyles } from "../../styles/componentsStyle/commonStyle/tutorProfileStyle";
import StudentSubjectOfInterest from "../../components/sections/userProfile/StudentSubjectOfInteret";

type propType = NativeStackScreenProps<any>;

const TutorProfileScreen: React.FC<propType> = ({ route }) => {
    return (
        <PrivateScreenLayout showBackButton={true} showSearchBar={false}>
            <View style={tutorProfileStyles.tutorProfileContainer}>
                <TutorHeader
                    name={tutorData.name}
                    rating={tutorData.rating}
                    reviews={tutorData.reviews}
                    imageUrl={route?.params?.imageUrl ?? tutorData.imageUrl}
                />
                <TutorBio text={tutorData.bio} />
                <TutoSubjectOfInterest subjects={tutorData.subjects} />
                <TutorExperience experiences={tutorData.experiences} />
                <EventsSection upcomingEventsData={tutorData.upcomingEvents} showViewMoreButton={tutorData.upcomingEvents.length > 4} />
                <TutorReviews rating={tutorData.rating} reviewCounts={tutorData.reviewCounts} />
                <StudentSubjectOfInterest subjects={tutorData.subjects} />

                <View style={tutorProfileStyles.availabilitySection}>
                    <Text style={tutorProfileStyles.availability}>Availability</Text>
                    <View style={tutorProfileStyles.availabilityCalendar}>
                        <CustomCalendar selectedDates={tutorData.bookedDays} />
                    </View>
                </View>
            </View>
        </PrivateScreenLayout>
    );
}

export default TutorProfileScreen;