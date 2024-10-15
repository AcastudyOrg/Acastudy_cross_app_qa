import React from "react";
import { View, Text } from "react-native";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface StudyDescriptionProps {
    text: string;
    onPress: () => void;
  }
  
  const StudyDescription: React.FC<StudyDescriptionProps> = ({ text, onPress }) => (
    <View style={studyFeedStyles.feedMiddleContainer}>
      <Text onPress={onPress}
        numberOfLines={2}
        style={studyFeedStyles.feedMiddleTextItem}
      >
        {text}
      </Text>
    </View>
  );

export default StudyDescription