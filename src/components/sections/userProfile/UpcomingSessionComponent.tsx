import React from "react";
import { View, Text, Image, Pressable } from "react-native";

import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth } from "../../../../utils/config";

type UpcomingSessionProps = {
  item: {
    id: number;
    avatar: string;
    title: string;
    description: string;
  };
};

const UpcomingSessionComponent = ({ item }: UpcomingSessionProps) => {
  const screenWidth = useScreenWidth();
  const containerWidth = homeTileScreenWidth(screenWidth);
  return (
    <Pressable
      onPress={() => console.log("session", item.title + " has been pressed")}
      style={profileScreenStyles.upcomingItemContentContainer}
    >
      <Image
        source={{ uri: item.avatar }}
        style={[
          profileScreenStyles.upcomingImageItem,
          {
            width: containerWidth * 0.9,
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
              width: containerWidth * 0.9,
            },
          ]}
        >
          {item.title}
        </Text>
        <Text numberOfLines={3} style={[profileScreenStyles.upcomingInfoItem,             {
              width: containerWidth * 0.9,
            },]}>
          {item.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default UpcomingSessionComponent;
