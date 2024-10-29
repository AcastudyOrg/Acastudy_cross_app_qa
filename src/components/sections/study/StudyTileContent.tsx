import React from "react";
import { View, Image, TouchableOpacity, Text, Pressable } from "react-native";
import CustomIcon from "../../common/CustomIcon";
import { StudyFeedEntry } from "../../../types/User/Feed";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

interface StudyTileContentProps {
	entry: StudyFeedEntry;
	onTutorPress: () => void;
}

export const StudyTileContent: React.FC<StudyTileContentProps> = ({
	entry,
	onTutorPress
}) => {
	return (
		<View style={studyFeedStyles.contentContainer}>
			<View style={studyFeedStyles.headerRow}>
				<Pressable onPress={onTutorPress}>
					<Image source={entry.tutorAvatar} style={studyFeedStyles.avatarImage} />
				</Pressable>
				
				<View>
					<Text style={studyFeedStyles.titleText} numberOfLines={1}> {entry.title} </Text>
					<Pressable onPress={onTutorPress}>
						<Text style={studyFeedStyles.tutorName} numberOfLines={1}>{entry.tutorName} </Text>
					</Pressable>
					<Text style={studyFeedStyles.dateText}> {entry.date}    |    RSVP: {entry.rsvpCount} </Text>
				</View>
			</View>
			<Pressable onPress={() => { }}>
				<CustomIcon set="Entypo" name="dots-three-vertical" />
			</Pressable>
		</View>
	);
};

export default StudyTileContent;