import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth } from "../../../../utils/config";

type UpcomingSessionProps = {
  item: {
    id: number;
    thumbnail: string;
    title: string;
    tutor: string;
    datetime: string;
    category: string;
    description: string;
  };
  onPress: () => void;
};

const UpcomingSessionComponent: React.FC<UpcomingSessionProps> = ({ item, onPress }) => {
  const screenWidth = useScreenWidth();
  const containerWidth = homeTileScreenWidth(screenWidth);

  const imageStyle = {
    width: containerWidth,
    height: containerWidth * 0.55,
  };

  const textContainerStyle = {
    width: containerWidth,
  };

  return (
    <Pressable onPress={onPress} style={profileScreenStyles.upcomingItemContentContainer}>
      <Image source={{ uri: item.thumbnail }} style={[profileScreenStyles.upcomingImageItem, imageStyle]} />
      <View style={profileScreenStyles.upcomingTitleContainer}>
        <Text numberOfLines={2} style={[profileScreenStyles.upcomingTitleItem, textContainerStyle]}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={[profileScreenStyles.upcomingInfoItem, textContainerStyle]}>
          {item.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default UpcomingSessionComponent;
