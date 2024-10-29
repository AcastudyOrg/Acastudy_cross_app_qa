import React from "react";
import { View, Image, TouchableOpacity, Text, Platform, Pressable } from "react-native";
import { StyleSheet } from 'react-native';
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth, isMobile } from "../../../../utils/config";
import { IMAGES } from "../../../constants";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";
import StudyDescription from "./StudyDescription";
import StudyAvatar from "./StudyAvatar";
import StudyDateTime from "./StudyDateTime";
import StudyTileHeader, { StudyTileContent } from "./StudyTileContent";
import { StudyFeedEntry } from "../../../types/User/Feed";
import { COLORS, FONT, SIZE, WEIGHT } from "../../../constants";
import CustomIcon from "../../common/CustomIcon";
import { StudyTileImage } from "./StudyTileImage";

interface StudyFeedComponentProps {
	entry: StudyFeedEntry;
}

const StudyFeedComponent: React.FC<StudyFeedComponentProps> = ({ entry }) => {
	const screenWidth = useScreenWidth();
	const containerWidth = homeTileScreenWidth(screenWidth);
	const mobile = isMobile(screenWidth);

	const showTutorProfile = () => {
		console.log("navigate to see tutor profile");
	};

	const readMoreAboutStudy = () => {
		console.log("navigate to see study details");
	};

	return (
		<TouchableOpacity 
		onPress={readMoreAboutStudy} 
		style={[studyFeedStyles.mainContainer, { width: mobile ? containerWidth * 2.55 : containerWidth * 1.4 }]}>
			<StudyTileImage image={entry.image} />
			<StudyTileContent entry={entry} onTutorPress={showTutorProfile} />
		</TouchableOpacity>
	);
};

export default StudyFeedComponent;