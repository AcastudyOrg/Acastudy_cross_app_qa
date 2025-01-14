import React, { useState } from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import ChatUserList from './ChatUserList';
import { mockChatsData } from "../../../../mockData/ChatData";
import chatDraggableComponentStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatDraggableComponentStyles';
import useScreenWidth from '../../../hooks/useScreenWidth';
import ChatMessageSection from './ChatMessageSection';
import { Chat } from '../../../types/User/Chat';

const ChatDraggableComponent = () => {
  const screenWidth = useScreenWidth();
  const [leftWidth, setLeftWidth] = useState(screenWidth * 0.2);
  const translateX = useSharedValue(0);

  const [activeChat, onChatChange] = useState<Chat>(mockChatsData[0]);

  const MAX_WIDTH = screenWidth - screenWidth * 0.7;
  const MIN_WIDTH = screenWidth * 0.2;

  const panGestureEvent = (event: any) => {
    const newLeftWidth = leftWidth + event.nativeEvent.translationX;
    if (newLeftWidth > MIN_WIDTH && newLeftWidth < MAX_WIDTH) {
      setLeftWidth(newLeftWidth);
    }
  };

  const dividerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={chatDraggableComponentStyles.container}>
      <View style={chatDraggableComponentStyles.wrapper}>
        <View style={{ width: leftWidth }}>
          <ChatUserList chatsData={mockChatsData} onChatChange={onChatChange} />
        </View>

        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[chatDraggableComponentStyles.divider, dividerStyle]} />
        </PanGestureHandler>

        <View style={chatDraggableComponentStyles.rightSection}>
          <ChatMessageSection chat={activeChat} />
        </View>
      </View>
    </View>
  );
};

export default ChatDraggableComponent;
