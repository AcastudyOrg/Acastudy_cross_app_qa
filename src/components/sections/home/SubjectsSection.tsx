import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { subjectsSectionStyles } from '../../../styles/componentsStyle/sectionsStyle/home/subjectsSectionStyle';
import SubjectComponent from './SubjectComponent';
import { STRING } from '../../../constants/strings';

type subjectsSectionProps = {
  subjectData: {
    thumbnail: string;
    title: string;
  }[];
};

const SubjectsSection: React.FC<subjectsSectionProps> = ({ subjectData }) => {
  const handleViewMore = () => {
    console.log('view more events')
  }

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
          <View
            key={i}
          >
            <SubjectComponent item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default SubjectsSection;