import React from "react";
import { View } from "react-native";
import DetailsInputContainerComponent from "../userProfile/DetailsInputContainerComponent";
import chatMessageTextSectionStyles from "../../../styles/componentsStyle/sectionsStyle/chatStyle/chatMessageTextSectionStyles";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";

const ChatMessageTextSection = () => {
    const [textMessage, setTextMessage] = React.useState<string>("");
    return (
        <View style={chatMessageTextSectionStyles.container}>
            <View style={chatMessageTextSectionStyles.inputContainer}>
                <DetailsInputContainerComponent
                    value={textMessage}
                    placeholder="Text..."
                    onChange={setTextMessage}
                />
            </View>
            <View style={chatMessageTextSectionStyles.sendContainer}>
                <GradientButtonComponent
                    text="Send"
                    onPress={() => console.log(textMessage)}
                />
            </View>
        </View>
    );
}

export default ChatMessageTextSection;