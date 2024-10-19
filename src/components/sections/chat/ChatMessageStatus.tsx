import React from 'react';
import { View, Text } from 'react-native';
import chatItemStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatItemStyles';
import CustomIcon from '../../common/CustomIcon';
import { COLORS } from '../../../constants';

interface MessageStatusProps {
    isCurrentUserSender: boolean;
    read?: boolean;
    delivered?: boolean;
    sent?: boolean;
    message: string;
}

const ChatMessageStatus: React.FC<MessageStatusProps> = ({ isCurrentUserSender, read, delivered, sent, message }) => {
    let messageStatusIcon = null;

    if (isCurrentUserSender) {
        if (read) {
            messageStatusIcon = <CustomIcon set={'MaterialCommunityIcons'} name={'check-all'} size={18} color={COLORS.purple} />;
        } else if (delivered) {
            messageStatusIcon = <CustomIcon set={'MaterialCommunityIcons'} name={'check-all'} size={18} color={COLORS.white50Percent} />;
        } else if (sent) {
            messageStatusIcon = <CustomIcon set={'MaterialCommunityIcons'} name={'check'} size={18} color={COLORS.white50Percent} />;
        }
    }

    return (
        <View style={chatItemStyles.messageStatus}>
            {messageStatusIcon && <View style={{ paddingRight: 5 }}>{messageStatusIcon}</View>}
            <Text style={chatItemStyles.lastMessage} numberOfLines={1}>
                {message}
            </Text>
        </View>
    );
};

export default ChatMessageStatus;
