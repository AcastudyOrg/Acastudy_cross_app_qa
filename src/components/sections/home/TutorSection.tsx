import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import TutorComponent from './TutorComponent';
import { tutorSectionStyles } from '../../../styles/componentsStyle/sectionsStyle/home/tutorSectionStyle';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation<any>();

    const handleViewMore = () => {
        navigation.navigate(NAV_SCREEN_NAME.TutorScreen);
    }

    return (
        <View style={tutorSectionStyles.tutorMainContainer}>
            <View style={tutorSectionStyles.tutorTextContainer}>
                <Text style={tutorSectionStyles.tutorTitleText}>{STRING.tutorTitle}</Text>
                <Text onPress={handleViewMore} style={tutorSectionStyles.tutorActionText}>{STRING.viewMore}</Text>
            </View>

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
    )
}


export default TutorSection;
