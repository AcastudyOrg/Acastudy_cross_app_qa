import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { COLORS } from '../../../constants';
import { tutorComponentStyles } from '../../../styles/componentsStyle/sectionsStyle/home/tutorComponentStyle';
import { homeTileScreenWidth } from '../../../../utils/config';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { NAV_SCREEN_NAME } from '../../../constants/strings';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '@/types/User/User';

type TutorProps = {
    user: UserType;
};

const TutorComponent: React.FC<TutorProps> = ({ user }) => {
    const navigation = useNavigation<any>();
    const screenWidth = useScreenWidth();
    const containerWidth = homeTileScreenWidth(screenWidth);
    return (
        <Pressable onPress={() => navigation.navigate(NAV_SCREEN_NAME.TutorProfileScreen, { userId: user.id })} style={[
            tutorComponentStyles.tutorContentContainer,
            { width: containerWidth, paddingHorizontal: containerWidth * .1 }]}>
            <View style={tutorComponentStyles.tutorImageContainer}>
                <Image
                    source={{ uri: user?.imageUrl }}
                    style={[
                        tutorComponentStyles.tutorImageItem,
                        { width: containerWidth * .3, height: containerWidth * .3 }
                    ]}
                />
                {user?.onlineStatus ? (
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
                    {user?.firstName} {user?.lastName}
                </Text>
                <Text style={tutorComponentStyles.tutorSubjectItem}>{user?.interests?.[0] || "Subject"}</Text>
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
        </Pressable>
    )
}

export default TutorComponent