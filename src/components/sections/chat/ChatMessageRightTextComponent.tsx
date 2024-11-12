import React from "react";
import { Text, View } from "react-native";

import { Message } from "../../../types/User/Message";
import chatMessageComponentStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageComponentStyles";
import { formatTime } from "../../../../utils/config";
import CustomIcon from "../../common/CustomIcon";
import { COLORS } from "../../../constants";

interface ChatMessageRightTextComponentProps {
    message: Message;
}

const ChatMessageRightTextComponent: React.FC<ChatMessageRightTextComponentProps> = ({
    message,
}) => {
    const time = formatTime(message.datetime);
    return (
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
    );
};

export default ChatMessageRightTextComponent;
