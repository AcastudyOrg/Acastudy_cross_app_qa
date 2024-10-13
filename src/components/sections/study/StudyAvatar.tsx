import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth, isMobile } from "../../../../utils/config";
import { COLORS, IMAGES } from "../../../constants";
import { STRING } from "../../../constants/strings";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface AvatarComponentProps {
  onPress: () => void;
  imageSource: string;
}

const StudyAvatar: React.FC<AvatarComponentProps> = ({ onPress, imageSource }) => (
  <Pressable onPress={onPress} style={studyFeedStyles.feedAvatarContainer}>
    <Image
      source={{ uri: imageSource }}
      alt="author"
      style={studyFeedStyles.feedAvatarItem}
    />
  </Pressable>
);

export default StudyAvatar;