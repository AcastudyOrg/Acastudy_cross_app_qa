import React from 'react';
import { View, Text } from 'react-native';
import { tutorBioStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorBioStyle';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { isDesktop } from '../../../../utils/config';

interface TutorBioProps {
  text: string;
}

const TutorBio: React.FC<TutorBioProps> = ({ text }) => {
  const screenWidth = useScreenWidth();
  const notMobile = isDesktop(screenWidth);
  return (
    <View style={tutorBioStyles.section}>
      <Text style={tutorBioStyles.sectionTitle}>Bio</Text>
      <View style={{ width: notMobile ? "75%" : "95%", }}>
        <Text style={tutorBioStyles.bioText}>{text}</Text>
      </View>
    </View>
  );
}

export default TutorBio;