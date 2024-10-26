import React from "react";
import { Text, View } from "react-native";

import { Message } from "../../../types/User/Message";
import chatMessageComponentStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageComponentStyles";
import { User } from "../../../types/User/Student";
import CustomIcon from "../../common/CustomIcon";
import { COLORS } from "../../../constants";
import { LoginMockUser } from "../../../../mockData/LoginUser";
import ChatMessageLeftTextComponent from "./ChatMessageLeftTextComponent";

interface ChatMessageComponentProps {
  message: Message;
  user: User;
}

const ChatMessageComponent: React.FC<ChatMessageComponentProps> = ({
  message,
  user,
}) => {
  const currentUser = message.senderId === LoginMockUser.id;
  const minutes = String(message.datetime.getMinutes()).padStart(2, "0");
  const hours = String(message.datetime.getHours()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  return (
    <View style={chatMessageComponentStyles.container}>
      {!currentUser ?
        <View style={chatMessageComponentStyles.leftContainer}>
          <ChatMessageLeftTextComponent message={message} user={user} />
          <Text style={chatMessageComponentStyles.leftTime}>{time}</Text>
        </View>
        :
        <View style={chatMessageComponentStyles.rightMessageContainer}>
          <View style={chatMessageComponentStyles.rightTextContainer}>
            <Text style={chatMessageComponentStyles.text}>
              {message.message}
            </Text>
          </View>

          <View style={chatMessageComponentStyles.rightSendContainer}>
            <Text style={chatMessageComponentStyles.rightTime}>{time}</Text>
            <CustomIcon
              size={15}
              set={'MaterialCommunityIcons'}
              name={(message.sent && !message.delivered && !message.read) ? 'check' : 'check-all'}
              color={(message.sent && message.delivered && message.read) ? COLORS.purple : COLORS.white50Percent}
            />
          </View>
        </View>
      }
    </View>
  );
};

export default ChatMessageComponent;
