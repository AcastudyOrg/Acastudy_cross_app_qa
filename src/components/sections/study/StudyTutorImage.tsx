import React from "react";
import { View, Image } from "react-native";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";
  
  interface StudyTutorImageProps {
    imageSource: string;
  }
  
  const StudyTutorImage: React.FC<StudyTutorImageProps> = ({ imageSource }) => (
    <View style={studyFeedStyles.feedBottomContainer}>
      <Image
        source={{ uri: imageSource }}
        alt="post-image"
        style={studyFeedStyles.feedBottomPostImageItem}
      />
    </View>
  );

export default StudyTutorImage