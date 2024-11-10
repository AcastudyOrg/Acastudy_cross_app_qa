import React from "react";
import { View, Image, Text } from "react-native";
import { ImageSourcePropType } from "react-native";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface StudyTileImageProps {
  image: ImageSourcePropType;
}

export const StudyTileImage: React.FC<StudyTileImageProps> = ({ image }) => {
  return (
    <View style={studyFeedStyles.imageContainer}>
      <Image source={image} style={studyFeedStyles.coverImage} />
      <View style={studyFeedStyles.liveIndicator}>
        <Text style={studyFeedStyles.liveText}>LIVE</Text>
      </View>
    </View>
  );
};