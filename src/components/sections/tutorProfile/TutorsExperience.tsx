import React from 'react';
import { View, Text } from 'react-native';
import { Experience } from '../../../types/User/Tutor';
import CustomIcon from '../../common/CustomIcon';
import { tutorExperienceStyles } from '../../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorExperienceStyle';


interface ExperienceProps {
    experiences: Experience[];
}

const TutorExperience: React.FC<ExperienceProps> = ({ experiences }) => (
    <View style={tutorExperienceStyles.section}>
        <Text style={tutorExperienceStyles.sectionTitle}>Experience</Text>
        {experiences.map((exp, index) => (
            <View key={index} style={tutorExperienceStyles.experienceItem}>
                <View style={tutorExperienceStyles.icon}>
                    <CustomIcon set='Ionicons' name='briefcase-outline' size={25}/>
                </View>
                <View style={tutorExperienceStyles.description}>
                    <Text style={tutorExperienceStyles.companyName}>{exp.company}</Text>
                    <Text style={tutorExperienceStyles.period}>{exp.period}</Text>
                    <Text style={tutorExperienceStyles.position}>{exp.position}</Text>
                </View>
            </View>
        ))}
    </View>
);

export default TutorExperience;