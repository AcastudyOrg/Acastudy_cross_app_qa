import React from "react";
import { Image, Text, View } from "react-native";

import { Message } from "../../../types/User/Message";
import chatMessageComponentStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageComponentStyles";
import { User } from "../../../types/User/Student";
import { formatTime } from "../../../../utils/config";


interface ChatMessageLeftTextComponentProps {
    message: Message;
    user: User;
}

const ChatMessageLeftTextComponent: React.FC<ChatMessageLeftTextComponentProps> = ({
    message,
    user,
}) => {
    const time = formatTime(message.datetime);
    return (
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
                        {message.message}
                    </Text>
                </View>
            </View>
            <Text style={chatMessageComponentStyles.leftTime}>{time}</Text>
        </View>
    );
};

export default ChatMessageLeftTextComponent;
