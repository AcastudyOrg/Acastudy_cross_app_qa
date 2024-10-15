import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth } from "../../../../utils/config";
import JoinMeetingPopUp from "../../common/JoinMeetingPopUp";

type UpcomingSessionProps = {
  item: {
    id: number;
    avatar: string;
    title: string;
    description: string;
  };
  controlModal: () => void;
  modalVisible: boolean; 
};

const UpcomingSessionComponent = ({ item, controlModal, modalVisible }: UpcomingSessionProps) => {
  const screenWidth = useScreenWidth();
  const containerWidth = homeTileScreenWidth(screenWidth);

  return (
    <Pressable
      onPress={() => controlModal()}
      style={profileScreenStyles.upcomingItemContentContainer}
    >
      <JoinMeetingPopUp visible={modalVisible} controlModal={controlModal} item={item} />
      <Image
        source={{ uri: item.avatar }}
        style={[
          profileScreenStyles.upcomingImageItem,
          {
            width: containerWidth * 1,
            height: containerWidth * 0.55,
          },
        ]}
      />
      <View style={profileScreenStyles.upcomingTitleContainer}>
        <Text
          numberOfLines={2}
          style={[
            profileScreenStyles.upcomingTitleItem,
            {
              width: containerWidth * 1,
            },
          ]}
        >
          {item.title}
        </Text>
        <Text numberOfLines={3} style={[profileScreenStyles.upcomingInfoItem,             {
              width: containerWidth * 1,
            },]}>
          {item.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default UpcomingSessionComponent;
