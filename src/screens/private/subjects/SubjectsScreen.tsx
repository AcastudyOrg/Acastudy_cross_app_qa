import React from "react";
import { View, Text } from "react-native";
import { PrivateScreenLayout, SubjectComponent } from "../../../components";
import { subjectsSectionStyles } from "../../../styles/componentsStyle/sectionsStyle/home/subjectsSectionStyle";
import { STRING } from "../../../constants/strings";
import subjectData from '../../../../assets/data/home/subjectData.json';


const SubjectScreen = () => {
return (
    <PrivateScreenLayout>
        <View style={subjectsSectionStyles.subjectMainContainer}>
            <View style={subjectsSectionStyles.subjectTextContainer}>
            <Text style={subjectsSectionStyles.subjectTitleText}>{STRING.subjectTitle}</Text>
            </View>
        </View>
        <View style={subjectsSectionStyles.subjectScreenMainContainer}>
            {subjectData.map((item, i) => (
            <View key={i}>
                <SubjectComponent item={item} />
            </View>
            ))}
        </View>

    </PrivateScreenLayout>
  );
}

export default SubjectScreen;