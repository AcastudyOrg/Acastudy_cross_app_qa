import React from "react";
import { View } from "react-native";

import {ComingSoonComponent, PrivateScreenLayout} from "../../components";
import { chatScreenStyles } from "../../styles/screensStyle/privateStyle/chatScreenStyle";

const ChatScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={chatScreenStyles.homeMainContainer}>
     <ComingSoonComponent/>
      </View>
    </PrivateScreenLayout>
  );
};

export default ChatScreen;
