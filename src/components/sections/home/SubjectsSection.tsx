import React from "react";
import { View, Text, ScrollView } from "react-native";

import { subjectsSectionStyles } from '../../../styles/componentsStyle/sectionsStyle/home/subjectsSectionStyle';
import SubjectComponent from './SubjectComponent';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';

type subjectsSectionProps = {
  subjectData: {
    thumbnail: string;
    title: string;
  }[];
};

const SubjectsSection: React.FC<subjectsSectionProps> = ({ subjectData }) => {

  const navigation = useNavigation<any>();

  const handleViewMore = () => {
    navigation.navigate(NAV_SCREEN_NAME.SubjectScreen);
    console.log("view more events");
  };

  return (
    <View style={subjectsSectionStyles.subjectMainContainer}>
      <View style={subjectsSectionStyles.subjectTextContainer}>
        <Text style={subjectsSectionStyles.subjectTitleText}>{STRING.subjectTitle}</Text>
        <Text onPress={handleViewMore} style={subjectsSectionStyles.subjectActionText}>{STRING.viewMore}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={subjectsSectionStyles.subjectMainDataContainer}
      >
        {subjectData.map((item, i) => (
          <View key={i}>
            <SubjectComponent item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SubjectsSection;
