import React from "react";
import { View, Image, Text } from "react-native";
import { ImageSourcePropType } from "react-native";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface StudyTileImageProps {
  image: ImageSourcePropType;
  live: boolean;
}

export const StudyTileImage: React.FC<StudyTileImageProps> = ({ image, live }) => {
  return (
    <View style={studyFeedStyles.imageContainer}>
      <Image source={image} style={studyFeedStyles.coverImage} />
      {live && <View style={studyFeedStyles.liveIndicator}>
        <Text style={studyFeedStyles.liveText}>LIVE</Text>
      </View>}
    </View>
  );
};