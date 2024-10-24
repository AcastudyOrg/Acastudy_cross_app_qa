import React from "react";
import { View } from "react-native";
import { PrivateScreenLayout } from "../../components";
import { chatScreenStyles } from "../../styles/screensStyle/privateStyle/chatScreenStyle";
import ChatDraggableComponent from "../../components/sections/chat/ChatDraggableComponent";
import { STRING } from "../../constants/strings";

const ChatScreen = () => {
  return (
    <PrivateScreenLayout
      showTitle={true}
      shouldScroll={false}
      title={STRING.chat}
      showSearchBar={false}
    >
      <View style={chatScreenStyles.homeMainContainer}>
        <ChatDraggableComponent />
      </View>
    </PrivateScreenLayout>
  );
};

export default ChatScreen;
