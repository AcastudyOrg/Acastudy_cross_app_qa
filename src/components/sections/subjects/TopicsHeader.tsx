import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { topicsHeaderStyles } from '../../../styles/componentsStyle/sectionsStyle/subjectsStyle/topicsHeaderStyle';
import { DropDownComponent } from '../../common/Form/DropDownComponent';
import GradientButtonComponent from '../../common/Form/GradientButtonComponent';
import { STRING } from '../../../constants/strings';

export const TopicsHeader = () => {
    const [levelOfStudy, setLevelOfStudy] = useState("");
    const [tutor, setTutor] = useState("");
    const filterLevelOfStudy = [ "Pre-School", "Primary", "Secondary", "Undergraduate", "Honors", "Masters", "PhD" ]
    const filterTutorData = ['John Doe', 'Jane Smith', 'Alan Turing']

    return (
        <View style={topicsHeaderStyles.topicsHeaderContainer}>
            <Text style={topicsHeaderStyles.topicsHeaderText}>{STRING.filterBy}</Text>
            <View style={topicsHeaderStyles.topicsHeaderRow}>
                <View style={topicsHeaderStyles.dropDownContainer}>
                    <DropDownComponent data={filterLevelOfStudy} placeholder="Level of study" value={levelOfStudy} onChange={setLevelOfStudy} />
                </View>
                <View style={topicsHeaderStyles.dropDownContainer}>
                    <DropDownComponent data={filterTutorData} placeholder="Tutor" value={tutor} onChange={setTutor} />
                </View>
                <View style={topicsHeaderStyles.clearFilterButton}>
                    <GradientButtonComponent text="Clear Filter" onPress={() => console.log("Clear clicked..")} />
                </View>
            </View>
        </View>
    );
};