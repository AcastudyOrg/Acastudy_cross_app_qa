import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import TutorComponent from './TutorComponent';
import { tutorSectionStyles } from '../../../styles/componentsStyle/sectionsStyle/home/tutorSectionStyle';

type tutorSectionProps = {
    tutorData: {
        firstName: string;
        lastName: string;
        avatar: string;
        subject: string;
        sessions: number;
        rating: number;
        online: boolean;
    }[];
};

const TutorSection: React.FC<tutorSectionProps> = ({ tutorData }) => {
    const handleViewMore = () => {
        console.log('view more tutors')
    }

    return (
        <View style={tutorSectionStyles.tutorMainContainer}>
            <View style={tutorSectionStyles.tutorTextContainer}>
                <Text style={tutorSectionStyles.tutorTitleText}>Tutors</Text>
                <Text onPress={handleViewMore} style={tutorSectionStyles.tutorActionText}>View more</Text>
            </View>

            {/* tutor data */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={tutorSectionStyles.tutorMainDataContainer}
            >
                {tutorData.map((item, i) => (
                    <View key={i}>
                        <TutorComponent item={item} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default TutorSection;