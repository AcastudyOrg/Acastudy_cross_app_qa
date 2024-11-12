import React from "react";
import { View } from "react-native";

import { Message } from "../../../types/User/Message";
import chatMessageComponentStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageComponentStyles";
import { User } from "../../../types/User/Student";
import { LoginMockUser } from "../../../../mockData/LoginUser";
import ChatMessageLeftTextComponent from "./ChatMessageLeftTextComponent";
import ChatMessageRightTextComponent from "./ChatMessageRightTextComponent";

interface ChatMessageComponentProps {
  message: Message;
  user: User;
}

const ChatMessageComponent: React.FC<ChatMessageComponentProps> = ({
  message,
  user,
}) => {
  const currentUser = message.senderId === LoginMockUser.id;
  return (
    <View style={chatMessageComponentStyles.container}>
      {!currentUser ?
        <ChatMessageLeftTextComponent message={message} user={user} />
        : <ChatMessageRightTextComponent message={message} />
      }
    </View>
  );
};

export default ChatMessageComponent;
