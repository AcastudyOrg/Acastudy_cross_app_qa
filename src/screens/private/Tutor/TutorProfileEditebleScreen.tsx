
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import TutorExperience from "@/components/sections/tutorProfile/TutorsExperience";
import EventsSection from "@/components/sections/home/EventsSection";
import TutorReviews from "@/components/sections/tutorProfile/TutorReview";
import PrivateScreenLayout from "@/components/layout/PrivateScreenLayout";
import TutorHeader from "@/components/sections/tutorProfile/TutorHeader";
import { tutorData } from "@/../mockData/TutorData";
import { tutorProfileStyles } from "@/styles/componentsStyle/commonStyle/tutorProfileStyle";
import { AvailablilityCalender } from "@/components/common/AvailablilityCalender";
import CustomNoStrokeTextInput from "@/components/common/Form/CustomNoStrokeTextInput";
import SubjectOfInterest from "@/components/sections/userProfile/SubjectOfInterest";
import { getUserId, useGetUser, useUpdateUser } from "@/graphql/hooks/user";
import CustomIcon from "@/components/common/CustomIcon";
import { STRING } from "@/constants/strings";
import { COLORS } from "@/constants";


const TutorProfileEditebleScreen = () => {
    const { user, refetch } = useGetUser();
    const { updateUser, updating } = useUpdateUser();

    const [isEdited, setIsEdited] = React.useState(false);
    const [iconColor, setIconColor] = React.useState<string>(COLORS.grayWhiteText40persent);
    const [biography, setBiography] = React.useState<string>("");
    const [interests, setInterests] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (user) {
            setInterests(user.interests);
            setBiography(user.biography);
        }
    }, [user]);

    React.useEffect(() => {
        const interestsChanged = JSON.stringify(interests) !== JSON.stringify(user?.interests);
        const biographyChanged = isEditedField(biography, user?.biography);

        if (interestsChanged || biographyChanged) {
            setIconColor(COLORS.purple);
            setIsEdited(true);
        } else {
            setIconColor(COLORS.grayWhiteText40persent);
            setIsEdited(false);
        }
    }, [interests, biography, user]);

    const isEditedField = (textfield: string, comparestr: string): Boolean => textfield !== comparestr;

    const onSave = async () => {
        const userId = await getUserId();
        const payload = {
            id: userId,
            updateUserInput: {
                biography: biography,
                interests: interests,
            },
        }

        await updateUser({ variables: payload }).then((res) => {
            if (res.data.updateUser.status === 200) {
                setIconColor(COLORS.grayWhiteText40persent);
                setIsEdited(false);
                refetch();
            }
            else throw res.data.updateUser;
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <PrivateScreenLayout showBackButton={true} showSearchBar={false}>
            {user && <View style={tutorProfileStyles.tutorProfileContainer}>
                <TutorHeader
                    user={user}
                    rating={tutorData.rating}
                    reviews={tutorData.reviews}
                    isEditeble={true}
                />

                <View style={tutorProfileStyles.personalInfoContainer}>
                    <View style={tutorProfileStyles.personalInfoTitleContainer}>
                        <Text style={tutorProfileStyles.sectionTitle}>{STRING.bio}</Text>
                        <TouchableOpacity disabled={!isEdited} style={tutorProfileStyles.personalInfoSaveButton} onPress={onSave} >
                            {updating ? <ActivityIndicator color={COLORS.white} size={"small"} /> :
                                <CustomIcon set={"Feather"} name={"save"} size={25} color={iconColor} />}
                        </TouchableOpacity>
                    </View>
                    <CustomNoStrokeTextInput
                        value={biography}
                        labelStyle={{ fontSize: 18, color: COLORS.white }}
                        placeholder={user?.biography}
                        multiline={true}
                        onChange={setBiography}
                    />
                </View>
                <View style={{ paddingStart: 10 }}>
                    <SubjectOfInterest subjects={interests} setSubjects={setInterests} showSubjectOfInterestPlaceholder={true} />
                    <TutorExperience user={user} experiences={tutorData.experiences} showExperiencePlaceholder />
                </View>
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
            </View>}
        </PrivateScreenLayout >
    );
}

export default TutorProfileEditebleScreen;