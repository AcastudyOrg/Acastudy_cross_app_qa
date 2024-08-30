import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { topicsHeaderStyles } from '../../../styles/componentsStyle/sectionsStyle/subjectsStyle/topicsHeaderStyle';
import { DropDownComponent } from '../../common/Form/DropDownComponent';
import filterLevelOfStudy from '../../../../assets/data/subjects/filterLeveOfStudy.json';
import filterTutorData from '../../../../assets/data/subjects/filterTutorData.json';
import GradientButtonComponent from '../../common/Form/GradientButtonComponent';
import { STRING } from '../../../constants/strings';

export const TopicsHeader = () => {
    const [levelOfStudy, setLevelOfStudy] = useState("");
    const [tutor, setTutor] = useState("");

    return (
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
    );
};