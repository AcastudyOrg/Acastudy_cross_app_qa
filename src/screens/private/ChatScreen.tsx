import React from "react";
import { View } from "react-native";
import {PrivateScreenLayout} from "../../components";
import { chatScreenStyles } from "../../styles/screensStyle/privateStyle/chatScreenStyle";
import ChatUserList from "../../components/sections/study/ChatUserList";
import { mockChatsData } from "../../../mockData/ChatData";

const ChatScreen = () => {
  const data = mockChatsData
  return (
    <PrivateScreenLayout>
      <View style={chatScreenStyles.homeMainContainer}>
      <ChatUserList chatsData={data}/>
      </View>
    </PrivateScreenLayout>
  );
};

export default ChatScreen;
