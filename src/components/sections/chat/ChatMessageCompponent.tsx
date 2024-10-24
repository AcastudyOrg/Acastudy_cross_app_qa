import React from "react";
import { Text, View } from "react-native";

import { Message } from "../../../types/User/Message";
import chatMessageComponentStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageComponentStyles";

interface ChatMessageComponentProps {
  message: Message;
}

const ChatMessageComponent: React.FC<ChatMessageComponentProps> = ({
  message,
}) => {
  console.log({ message });
  return (
    <View style={chatMessageComponentStyles.container}>
      <View style={chatMessageComponentStyles.leftMessageContainer}>
        <Text>Hellow From user 1, lets see if the container increases by text length.</Text>
      </View>

      <View style={chatMessageComponentStyles.rightMessageContainer}>
        <Text>Hellow From user 2</Text>
      </View>
    </View>
  );
};

export default ChatMessageComponent;
