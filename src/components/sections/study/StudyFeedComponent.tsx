import React from "react";
import { View, Text, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth, isMobile } from "../../../../utils/config";
import { COLORS, IMAGES } from "../../../constants";
import { STRING } from "../../../constants/strings";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";
import StudyDescription from "./StudyDescription";
import StudyAvatar from "./StudyAvatar";
import StudyDateTime from "./StudyDateTime";
import StudyTutorImage from "./StudyTutorImage";
import StudyTileHeader from "./StudyTileHeader";

const StudyFeedComponent: React.FC = () => {
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
		<View
			style={[
				studyFeedStyles.mainContainer,
				{ width: mobile ? containerWidth * 2.55 : containerWidth * 1.4 },
			]}
		>
			<View style={studyFeedStyles.feedMainContainer}>
				<View style={studyFeedStyles.feedTopContainer}>
					<StudyAvatar onPress={showTutorProfile} imageSource={IMAGES.studentPicture} />
					<View style={studyFeedStyles.feedTopTextContainer}>
						<StudyTileHeader
							title={STRING.studyPostTitle}
							name={STRING.studyTutorName}
							onAuthorPress={showTutorProfile}
						/>
					</View>
				</View>

				<StudyDateTime date={STRING.studyDate} rsvp={STRING.studyRSVPies} duration={STRING.studyDuration} />
				<StudyDescription text={STRING.studyPostText} onPress={readMoreAboutStudy} />
				<StudyTutorImage imageSource={IMAGES.maths} />
			</View>
		</View>
	);
};

export default StudyFeedComponent;