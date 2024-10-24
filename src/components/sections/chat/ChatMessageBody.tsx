import React from "react";
import { View } from "react-native";
import ChatMessageTextSection from "./ChatMessageTextSection";
import chatMessageBodyStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageBodyStyles";
import CustomDivider from "../../common/Form/CustomDivider";
import { COLORS } from "../../../constants";

const ChatMessageBody = () => {
    return (
        <View style={chatMessageBodyStyles.container}>
            <View style={chatMessageBodyStyles.footerContainer}>
                <View style={chatMessageBodyStyles.divider}>
                    <CustomDivider color={COLORS.white10Percent} thickness={.7} />
                </View>
                <ChatMessageTextSection />
            </View>
        </View>
    );
}

export default ChatMessageBody;