import React from "react";
import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";
import CustomIcon from "../../common/CustomIcon";
import { StudyFeedEntry } from "../../../types/User/Feed";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";
import { useNavigation } from "@react-navigation/native";
import { NAV_SCREEN_NAME } from "../../../constants/strings";

interface StudyTileContentProps {
	entry: StudyFeedEntry;
}

export const StudyTileContent: React.FC<StudyTileContentProps> = ({
	entry
}) => {
	const navigation = useNavigation<any>();
	return (
		<View style={studyFeedStyles.contentContainer}>
			<View style={studyFeedStyles.headerRow}>
				<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.TutorProfileScreen, { imageUrl: entry.tutorAvatar })}>
					<Image source={entry.tutorAvatar} style={studyFeedStyles.avatarImage} />
				</TouchableOpacity>

				<View>
					<Text style={studyFeedStyles.titleText} numberOfLines={1}> {entry.title} </Text>
					<Text style={studyFeedStyles.tutorName} numberOfLines={1}>{entry.tutorName} </Text>
					<Text style={studyFeedStyles.dateText}> {entry.date}    |    RSVP: {entry.rsvpCount} </Text>
				</View>
			</View>
			<Pressable style={studyFeedStyles.menuIconContainer} onPress={() => console.log("menu clicked.")}>
				<CustomIcon set="Entypo" name="dots-three-vertical" size={14} />
			</Pressable>
		</View>
	);
};

export default StudyTileContent;