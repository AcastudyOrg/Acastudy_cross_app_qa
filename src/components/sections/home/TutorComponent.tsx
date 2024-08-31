import React from 'react';
import { Image, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { COLORS } from '../../../constants';
import { tutorComponentStyles } from '../../../styles/componentsStyle/sectionsStyle/home/tutorComponentStyle';
import { homeTileScreenWidth } from '../../../../utils/config';
import useScreenWidth from '../../../hooks/useScreenWidth';

type TutorProps = {
    item: {
        firstName: string;
        lastName: string;
        avatar: string;
        subject: string;
        sessions: number;
        rating: number;
        online: boolean;
    }
};

const TutorComponent: React.FC<TutorProps> = ({ item }) => {
    const screenWidth = useScreenWidth();
    const containerWidth = homeTileScreenWidth(screenWidth);
    return (
        <View style={[
            tutorComponentStyles.tutorContentContainer,
            { width: containerWidth, paddingHorizontal: containerWidth * .1 }]}>
            <View style={tutorComponentStyles.tutorImageContainer}>
                <Image
                    source={{ uri: item.avatar }}
                    style={[
                        tutorComponentStyles.tutorImageItem,
                        { width: containerWidth * .3, height: containerWidth * .3 }
                    ]}
                />
                {item.online ? (
                    <Octicons
                        name="dot-fill"
                        size={15}
                        color={COLORS.lightGreen}
                        style={tutorComponentStyles.tutorOnline}
                    />
                ) : (
                    <Octicons
                        name="dot-fill"
                        size={15}
                        color={COLORS.darkGray}
                        style={tutorComponentStyles.tutorOnline}
                    />
                )}
            </View>

            <View style={tutorComponentStyles.tutorNameContainer}>
                <Text style={tutorComponentStyles.tutorNameItem}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.firstName} {item.lastName}
                </Text>
                <Text style={tutorComponentStyles.tutorSubjectItem}>{item.subject}</Text>
            </View>

            <View style={tutorComponentStyles.bottomSection}>
                <View style={tutorComponentStyles.sessions}>
                    <Text style={tutorComponentStyles.sessionText}>Session</Text>
                    <Text style={tutorComponentStyles.sessionValueText}>123</Text>
                </View>
                <View style={tutorComponentStyles.rating}>
                    <Text style={tutorComponentStyles.ratingText}>Rating</Text>
                    <Text style={tutorComponentStyles.ratingValueText}>3.5</Text>
                </View>
            </View>
        </View>
    )
}

export default TutorComponent