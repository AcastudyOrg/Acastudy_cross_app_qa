import React from 'react';
import { View, Text } from 'react-native';
import { tutorBioStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorBioStyle';

interface BioProps {
  text: string;
}

const TutorBio: React.FC<BioProps> = ({ text }) => (
  <View style={tutorBioStyles.section}>
    <Text style={tutorBioStyles.sectionTitle}>Bio</Text>
    <Text style={tutorBioStyles.bioText}>{text}</Text>
  </View>
);

export default TutorBio;