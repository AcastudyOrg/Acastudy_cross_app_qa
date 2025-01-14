import React from 'react';
import { View, Text, Image } from 'react-native';
import { User } from '../../../types/User/Student';
import chatMessageHeaderStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageHeaderStyles';

interface MessageHeaderProps {
    user: User
}

const ChatMessageHeader: React.FC<MessageHeaderProps> = ({ user }) => {
    return (
        <View style={chatMessageHeaderStyles.container}>
            <View style={chatMessageHeaderStyles.pofileSection}>
                <Image source={user.profilePictureUrl} style={chatMessageHeaderStyles.image} />

                <View style={chatMessageHeaderStyles.rightContainer}>
                    <Text style={chatMessageHeaderStyles.userName} numberOfLines={1}>
                        {user.name + ' ' + user.surname}
                    </Text>
                    {user.onlineStatus ? <View style={chatMessageHeaderStyles.onlineIndicatorContainer}>
                        <View style={chatMessageHeaderStyles.onlineIndicator} />
                        <Text style={chatMessageHeaderStyles.onlineText}>{"Online"}</Text>
                    </View>:
                    <View style={chatMessageHeaderStyles.offlineIndicatorContainer}>
                        <View style={chatMessageHeaderStyles.offlineIndicator} />
                        <Text style={chatMessageHeaderStyles.offlineText}>{"Offline"}</Text>
                    </View>}
                </View>
            </View>
        </View>
    );
};

export default ChatMessageHeader;
