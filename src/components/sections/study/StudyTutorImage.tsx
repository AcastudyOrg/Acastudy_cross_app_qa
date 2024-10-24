import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";
  
  interface StudyTutorImageProps {
    imageUrl: ImageSourcePropType;
  }
  
  const StudyTutorImage: React.FC<StudyTutorImageProps> = ({ imageUrl }) => (
    <View style={studyFeedStyles.feedBottomContainer}>
      <Image
        source={imageUrl}
        alt="post-image"
        style={studyFeedStyles.feedBottomPostImageItem}
      />
    </View>
  );

export default StudyTutorImage