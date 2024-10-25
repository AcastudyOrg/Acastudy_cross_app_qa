import React, { useEffect, useRef } from "react";
import { View, ScrollView } from "react-native";

import ChatMessageTextSection from "./ChatMessageTextSection";
import chatMessageBodyStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageBodyStyles";
import CustomDivider from "../../common/Form/CustomDivider";
import { COLORS } from "../../../constants";
import { Chat } from "../../../types/User/Chat";
import ChatMessageComponent from "./ChatMessageCompponent";

interface ChatMessageBodyProps {
  chat: Chat;
}

const ChatMessageBody: React.FC<ChatMessageBodyProps> = ({ chat }) => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, []);

  return (
    <View style={chatMessageBodyStyles.container}>
      <View style={chatMessageBodyStyles.scrollContainer}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          style={chatMessageBodyStyles.scrollView}
        >
          {chat.messages.map((message, i) => (
            <View key={i}>
              <ChatMessageComponent message={message} user={chat.user} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={chatMessageBodyStyles.footerContainer}>
        <View style={chatMessageBodyStyles.divider}>
          <CustomDivider color={COLORS.white10Percent} thickness={0.7} />
        </View>
        <ChatMessageTextSection />
      </View>
    </View>
  );
};

export default ChatMessageBody;
