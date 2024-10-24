import React from 'react';
import { View } from 'react-native';

import ChatMessageHeader from './ChatMessageHeader';
import { Chat } from '../../../types/User/Chat';
import ChatMessageBody from './ChatMessageBody';

interface ChatMessageProps {
    chat: Chat,
}

const ChatMessageSection: React.FC<ChatMessageProps> = ({ chat }) => {
    return (
        <View style={{ flex: 1 }}>
            <ChatMessageHeader user={chat.user} />
            <ChatMessageBody chat={chat} />
        </View>
    );
};

export default ChatMessageSection;
