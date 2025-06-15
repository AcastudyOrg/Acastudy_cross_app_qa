import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import TutorComponent from './TutorComponent';
import { tutorSectionStyles } from '../../../styles/componentsStyle/sectionsStyle/home/tutorSectionStyle';
import { NAV_SCREEN_NAME, STRING } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '@/types/User/User';

type tutorSectionProps = {
    tutors?: UserType[];
};

const TutorSection: React.FC<tutorSectionProps> = ({ tutors }) => {
    const navigation = useNavigation<any>();

    const handleViewMore = () => {
        navigation.navigate(NAV_SCREEN_NAME.TutorsScreen);
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
                {tutors?.map((user, i) => (
                    <View key={i}>
                        <TutorComponent user={user} />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}


export default TutorSection;
