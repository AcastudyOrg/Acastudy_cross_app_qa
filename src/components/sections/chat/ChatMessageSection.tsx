import React from 'react';
import { View } from 'react-native';

import ChatMessageHeader from './ChatMessageHeader';
import { chatData } from '../../../types/User/Chat';

interface ChatMessageProps {
    chatData: chatData,
}

const ChatMessageSection: React.FC<ChatMessageProps> = ({ chatData }) => {
    return (
        <View style={{ flex: 1 }}>
            <ChatMessageHeader user={chatData.user} />
            {/*Chat Body component goes here...*/}
        </View>
    );
};

export default ChatMessageSection;
