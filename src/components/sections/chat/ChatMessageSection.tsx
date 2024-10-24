import React from 'react';
import { View } from 'react-native';

import ChatMessageHeader from './ChatMessageHeader';
import { chatData } from '../../../types/User/Chat';
import ChatMessageTextSection from './ChatMessageTextSection';
import ChatMessageBody from './ChatMessageBody';

interface ChatMessageProps {
    chatData: chatData,
}

const ChatMessageSection: React.FC<ChatMessageProps> = ({ chatData }) => {
    return (
        <View style={{ flex: 1 }}>
            <ChatMessageHeader user={chatData.user} />
            <ChatMessageBody />
        </View>
    );
};

export default ChatMessageSection;
