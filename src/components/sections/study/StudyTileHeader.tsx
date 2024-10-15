import React from "react";
import { View, Text, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface StudyTileHeaderProps {
	title: string;
	name: string;
	onAuthorPress: () => void;
}

const handleOptions = () => {
	console.log("show modal with options");
};
 
const StudyTileHeader: React.FC<StudyTileHeaderProps> = ({
	title,
	name,
	onAuthorPress
}) => (
	<View>
		<View style={studyFeedStyles.feedTopTextActionContainer}>
			<View style={studyFeedStyles.feedTopTextItemContainer}>
				<Text numberOfLines={1} style={studyFeedStyles.feedTopTextItem}>
					{title}
				</Text>
			</View>
			<Pressable
				onPress={handleOptions}
				style={studyFeedStyles.feedTopActionItemContainer}
			>
				<SimpleLineIcons
					name="options-vertical"
					size={10}
					color={COLORS.white}
				/>
			</Pressable>
		</View>
		<View style={studyFeedStyles.feedTopTextNameContainer}>
			<Text
				onPress={onAuthorPress}
				numberOfLines={1}
				style={studyFeedStyles.feedTopTextNameItem}
			>
				{name}
			</Text>
		</View>
	</View>
);

export default StudyTileHeader