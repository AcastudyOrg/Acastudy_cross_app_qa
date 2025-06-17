
import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useGetUser } from "@/graphql/hooks/user";

import TutorBio from "@/components/sections/tutorProfile/TutorBio";
import TutorSubjectOfInterest from "@/components/sections/tutorProfile/TutorSubjectOfInterest";
import TutorExperience from "@/components/sections/tutorProfile/TutorsExperience";
import EventsSection from "@/components/sections/home/EventsSection";
import TutorReviews from "@/components/sections/tutorProfile/TutorReview";
import PrivateScreenLayout from "@/components/layout/PrivateScreenLayout";
import TutorHeader from "@/components/sections/tutorProfile/TutorHeader";
import { tutorData } from "@/../mockData/TutorData";
import { tutorProfileStyles } from "@/styles/componentsStyle/commonStyle/tutorProfileStyle";
import { AvailablilityCalender } from "@/components/common/AvailablilityCalender";


const TutorProfileScreen = () => {
    const route = useRoute();
    const { userId } = route?.params as { userId: string };
    const { user } = useGetUser(userId);
    return (
        <PrivateScreenLayout showBackButton={true} showSearchBar={false}>
            <View style={tutorProfileStyles.tutorProfileContainer}>
                <TutorHeader
                    user={user}
                    rating={tutorData.rating}
                    reviews={tutorData.reviews}
                />
                <TutorBio text={tutorData.bio} />
                <TutorSubjectOfInterest subjects={tutorData.subjects} />
                <TutorExperience experiences={tutorData.experiences} />
                <EventsSection upcomingEventsData={tutorData.upcomingEvents} showViewMoreButton={tutorData.upcomingEvents.length > 4} />
                <TutorReviews rating={tutorData.rating} reviewCounts={tutorData.reviewCounts} />

                <View style={tutorProfileStyles.availabilitySection}>
                    <Text style={tutorProfileStyles.availability}>Availability</Text>
                    <View>
                    <AvailablilityCalender
                        onDateSelect={() => {}}
                        selectedTutor={tutorData.bookedOutDates || undefined} // pass in the user you have selected
                        minDate={new Date().toISOString().split('T')[0]}
      />
                        {/* <CustomCalendar isClickable={true} selectedDates={tutorData.bookedDays} /> */}
                    </View>
                </View>
            </View>
        </PrivateScreenLayout>
    );
}

export default TutorProfileScreen;