import React from 'react';
import { View, Text } from 'react-native';
import { STRING } from '../../../constants/strings';
import { tutorSubjectOfInterestStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/TutorSubjectOfInterest';

interface TutoSubjectOfInterestProps {
    subjects: string[];
}

const TutoSubjectOfInterest: React.FC<TutoSubjectOfInterestProps> = ({ subjects }) => (
    <View style={tutorSubjectOfInterestStyles.section}>
        <Text style={tutorSubjectOfInterestStyles.sectionTitle}>{STRING.subjectTitle}</Text>
        <View style={tutorSubjectOfInterestStyles.subjectsContainer}>
            {subjects.map((subject, index) => (
                <View key={index} style={tutorSubjectOfInterestStyles.subjectTag}>
                    <Text style={tutorSubjectOfInterestStyles.subjectText}>{subject}</Text>
                </View>
            ))}
        </View>
    </View>
);

export default TutoSubjectOfInterest;