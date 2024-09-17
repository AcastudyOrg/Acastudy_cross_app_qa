import React, { useState } from "react";
import { View, Text } from "react-native";

import { GradientButtonComponent, PrivateScreenLayout, TutorComponent } from "../../../components";
import { tutorSectionStyles } from "../../../styles/componentsStyle/sectionsStyle/home/tutorSectionStyle";
import { DropDownComponent } from "../../../components/common/Form/DropDownComponent";
import tutorData from '../../../../assets/data/home/tutorData.json';
import { topicsHeaderStyles } from "../../../styles/componentsStyle/sectionsStyle/subjectsStyle/topicsHeaderStyle";
import filterLevelOfStudy from '../../../../assets/data/subjects/filterLeveOfStudy.json';
import filterTutorData from '../../../../assets/data/subjects/filterTutorData.json';
import { STRING } from "../../../constants/strings";


const TutorsScreen = () => {
    const [levelOfStudy, setLevelOfStudy] = useState("");
    const [tutor, setTutor] = useState("");

    return (
        <PrivateScreenLayout showBackButton={true}>
            <View style={topicsHeaderStyles.topicsHeaderContainer}>
                <Text style={topicsHeaderStyles.topicsHeaderText}>{STRING.filterBy}</Text>
                <View style={topicsHeaderStyles.topicsHeaderRow}>
                    <View style={topicsHeaderStyles.dropDownContainer}>
                        <DropDownComponent data={filterLevelOfStudy} placeholder="Level of study" value={levelOfStudy} onChangeText={setLevelOfStudy} />
                    </View>
                    <View style={topicsHeaderStyles.dropDownContainer}>
                        <DropDownComponent data={filterTutorData} placeholder="Tutor" value={tutor} onChangeText={setTutor} />
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
