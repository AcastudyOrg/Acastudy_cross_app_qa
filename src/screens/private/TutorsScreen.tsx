import React, { useState } from "react";
import { View, Text } from "react-native";

import { GradientButtonComponent, PrivateScreenLayout, TutorComponent } from "../../components";
import { tutorSectionStyles } from "../../styles/componentsStyle/sectionsStyle/home/tutorSectionStyle";
import { useRoute } from "@react-navigation/native";
import { DropDownComponent } from "../../components/common/Form/DropDownComponent";
import tutorData from '../../../assets/data/home/tutorData.json';
import { topicsHeaderStyles } from "../../styles/componentsStyle/sectionsStyle/subjectsStyle/topicsHeaderStyle";
import filterLevelOfStudy from '../../../assets/data/subjects/filterLeveOfStudy.json';
import filterSubjectTopics from '../../../assets/data/subjects/SubjectTopics.json';
import { STRING } from "../../constants/strings";


const TutorsScreen = ()  => {

    const [levelOfStudy, setLevelOfStudy] = useState("");
    const [subject, setSubject] = useState("");

    return (
        <PrivateScreenLayout>

            <View style={topicsHeaderStyles.topicsHeaderContainer}>
                <Text style={topicsHeaderStyles.topicsHeaderText}>{STRING.filterBy}</Text>
                <View style={topicsHeaderStyles.topicsHeaderRow}>
                    <View style={topicsHeaderStyles.dropDownContainer}>
                        <DropDownComponent data={filterLevelOfStudy} placeholder="Level of study" value={levelOfStudy} onChangeText={setLevelOfStudy} />
                    </View>
                    <View style={topicsHeaderStyles.dropDownContainer}>
                        <DropDownComponent data={filterSubjectTopics} placeholder="Tutor" value={subject} onChangeText={setSubject} />
                    </View>
                    <View style={topicsHeaderStyles.clearFilterButton}>
                        <GradientButtonComponent text="Clear Filter" onPress={() => console.log("Clear clicked..")} />
                    </View>
                </View>
            </View>

            <View style={tutorSectionStyles.tutorMainScreenContainer}>
                    {tutorData.map((item, i) => (
                        <View key={i}>
                            <TutorComponent item={item} />
                        </View>
                    ))}
            </View>
        </PrivateScreenLayout>
    );
};


export default TutorsScreen;
