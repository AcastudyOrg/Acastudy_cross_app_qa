import React from "react";
import { Image, Text, View } from "react-native";

import { Message } from "../../../types/User/Message";
import chatMessageComponentStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageComponentStyles";
import { User } from "../../../types/User/Student";
import { STRING } from "../../../constants/strings";

interface ChatMessageComponentProps {
  message: Message;
  user: User;
}

const ChatMessageComponent: React.FC<ChatMessageComponentProps> = ({
  message,
  user,
}) => {
  console.log({ message });
  return (
    <View style={chatMessageComponentStyles.container}>
      <View style={chatMessageComponentStyles.leftContainer}>
        <View style={chatMessageComponentStyles.leftMessageContainer}>
          <View style={chatMessageComponentStyles.userImageContainer}>
            <Image
              source={user.profilePictureUrl}
              style={chatMessageComponentStyles.image}
            />
          </View>

          <View style={chatMessageComponentStyles.leftTextContainer}>
            <Text style={chatMessageComponentStyles.text}>
              {STRING.OnbordingBecomeAStudentFirstInfo}
            </Text>
          </View>
        </View>
        <Text style={chatMessageComponentStyles.leftTime}>13:43</Text>
      </View>

      <View style={chatMessageComponentStyles.rightMessageContainer}>
        <View style={chatMessageComponentStyles.rightTextContainer}>
          <Text style={chatMessageComponentStyles.text}>
            {STRING.bannerContent}
          </Text>
        </View>
        <Text style={chatMessageComponentStyles.rightTime}>15:10</Text>
      </View>
    </View>
  );
};

export default ChatMessageComponent;
