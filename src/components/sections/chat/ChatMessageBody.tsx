import React from "react";
import { View } from "react-native";

import ChatMessageTextSection from "./ChatMessageTextSection";
import chatMessageBodyStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageBodyStyles";
import CustomDivider from "../../common/Form/CustomDivider";
import { COLORS } from "../../../constants";
import { Chat } from "../../../types/User/Chat";
import ChatMessageBodyScrollView from "./ChatMessageBodyScrollView";

interface ChatMessageBodyProps {
  chat: Chat;
}

const ChatMessageBody: React.FC<ChatMessageBodyProps> = ({ chat }) => {
  return (
    <View style={chatMessageBodyStyles.container}>
      <ChatMessageBodyScrollView chat={chat} />
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
