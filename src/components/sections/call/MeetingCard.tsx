import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import CustomIcon from '../../common/CustomIcon';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { homeTileScreenWidth } from '../../../../utils/config';
import GradientButtonComponent from '../../common/Form/GradientButtonComponent';
import meetingCardStyles from '../../../styles/componentsStyle/sectionsStyle/call/meetingCardStyles';

interface MeetingCardProps {
    meeting: {
        title: string;
        time: string;
        attendees: ImageSourcePropType[];
    };
}

const MeetingCard: React.FC<MeetingCardProps> = ({ meeting }) => {
    const { title, time, attendees } = meeting;
    const screenWidth = useScreenWidth();
    const containerWidth = homeTileScreenWidth(screenWidth);

    return (
        <View style={[meetingCardStyles.container, {
            width: containerWidth * .9, height: containerWidth * .55,
        }
        ]}>
            <View style={meetingCardStyles.header}>
                <View style={meetingCardStyles.titleContainer}>
                    <Text style={meetingCardStyles.title} numberOfLines={2}>{title}</Text>
                    <Text style={meetingCardStyles.time}>{time}</Text>
                </View>
                <TouchableOpacity >
                    <CustomIcon set={'Entypo'} name={'dots-three-horizontal'} />
                </TouchableOpacity>
            </View>
            <View style={meetingCardStyles.attendeesContainer}>

                {attendees.slice(0, 4).map((avatar, index) => (
                    <Image key={index} source={avatar} style={meetingCardStyles.avatar} />
                ))}
                {attendees.length > 4 && (
                    <View style={[meetingCardStyles.avatar, meetingCardStyles.moreAvatars]}>
                        <Text style={meetingCardStyles.moreAvatarsText}>+{attendees.length - 4}</Text>
                    </View>
                )}

                <View style={meetingCardStyles.joinButton}>
                    <GradientButtonComponent text="Join Now" onPress={() => { }} />
                </View>
            </View>
        </View>
    );
};

export default MeetingCard;