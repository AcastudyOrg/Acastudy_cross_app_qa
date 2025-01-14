import React, { useEffect, useRef } from "react";
import { View, ScrollView, Text } from "react-native";

import chatMessageBodyStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageBodyStyles";
import { Chat } from "../../../types/User/Chat";
import ChatMessageComponent from "./ChatMessageCompponent";
import { groupMessagesByDate } from "../../../../utils/chatHelpers";
import { whichDay } from "../../../../utils/config";

interface ChatMessageBodyScrollViewProps {
    chat: Chat;
}

const ChatMessageBodyScrollView: React.FC<ChatMessageBodyScrollViewProps> = ({ chat }) => {
    const scrollViewRef = useRef<ScrollView | null>(null);

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, []);

    const groupedMessages = groupMessagesByDate(chat.messages ?? []);
    return (
        <View style={chatMessageBodyStyles.scrollContainer}>
            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
                style={chatMessageBodyStyles.scrollView}
            >
                {Object?.keys(groupedMessages)?.slice()?.map((date) => (
                    <View key={date}>
                        <Text style={chatMessageBodyStyles.whichDay}>
                            {whichDay(date)}
                        </Text>
                        {groupedMessages[date] && groupedMessages[date]?.map((message, i) => (
                            <View key={i}>
                                <ChatMessageComponent message={message} user={chat.user} />
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ChatMessageBodyScrollView;
