import React from 'react';
import { View, Text } from 'react-native';
import chatItemStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatItemStyles';
import CustomIcon from '../../common/CustomIcon';
import { COLORS } from '../../../constants';
import { Message } from '../../../types/User/Message';
import { User } from '../../../types/User/Student';

interface MessageStatusProps {
    currentUser: User;
    message: Message;
    unreadMessageCount: number;
}

const ChatMessageStatus: React.FC<MessageStatusProps> = ({ currentUser, message, unreadMessageCount }) => {
    const isCurrentUserSender = message.senderId === currentUser.id;

    return (
        <View style={chatItemStyles.messageStatus}>
            {isCurrentUserSender && <View style={{ paddingRight: 5 }}>
                <CustomIcon
                    size={18}
                    set={'MaterialCommunityIcons'}
                    name={(message.sent && !message.delivered && !message.read) ? 'check' : 'check-all'}
                    color={(message.sent && message.delivered && message.read) ? COLORS.purple : COLORS.white50Percent}
                />
            </View>}
            <Text style={chatItemStyles.lastMessage} numberOfLines={1}>{message.message}</Text>
            {unreadMessageCount > 0 && (
                <View style={[chatItemStyles.unreadBadge, { marginTop: 5 }]}>
                    <Text style={chatItemStyles.unreadCount}>{unreadMessageCount}</Text>
                </View>
            )}
        </View>
    );
};

export default ChatMessageStatus;
