import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth, isMobile } from "../../../../utils/config";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

import { StudyTileContent } from "./StudyTileContent";
import { mockStudyFeedData } from "../../../../mockData/FeedData";
import { StudyTileImage } from "./StudyTileImage";
import { STRING } from "../../../constants/strings";


const StudyFeedComponent = () => {
	const screenWidth = useScreenWidth();
	const containerWidth = homeTileScreenWidth(screenWidth);
	const mobile = isMobile(screenWidth);

	return (
		<View>
			<View style={studyFeedStyles.studyTextContainer}>
				<Text style={studyFeedStyles.studyTitleText}>{STRING.studyTitle}</Text>
			</View>
			<View style={studyFeedStyles.studyScrollWrap}>
				{mockStudyFeedData.map((entry) => (
					<TouchableOpacity
						onPress={() => console.log("navigate to see study details")}
						style={[studyFeedStyles.itemContainer, { width: mobile ? containerWidth * 2.55 : containerWidth * 1.4 }]}>
						<StudyTileImage image={entry.image} live={entry.live} />
						<StudyTileContent entry={entry} />
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default StudyFeedComponent;