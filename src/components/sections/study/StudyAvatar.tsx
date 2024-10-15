import React from "react";
import { Image, Pressable, ImageSourcePropType } from "react-native";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface AvatarComponentProps {
  onPress: () => void;
  imageSource: ImageSourcePropType;
}

const StudyAvatar: React.FC<AvatarComponentProps> = ({ onPress, imageSource }) => (
  <Pressable onPress={onPress} style={studyFeedStyles.feedAvatarContainer}>
    <Image
      source={ imageSource }
      alt="author"
      style={studyFeedStyles.feedAvatarItem}
    />
  </Pressable>
);

export default StudyAvatar;