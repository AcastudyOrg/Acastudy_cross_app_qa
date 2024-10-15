import React from "react";
import { View } from "react-native";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth, isMobile } from "../../../../utils/config";
import { IMAGES } from "../../../constants";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";
import StudyDescription from "./StudyDescription";
import StudyAvatar from "./StudyAvatar";
import StudyDateTime from "./StudyDateTime";
import StudyTutorImage from "./StudyTutorImage";
import StudyTileHeader from "./StudyTileHeader";
import { StudyFeedEntry } from "../../../types/User/Feed";

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
		<View
			style={[
				studyFeedStyles.mainContainer,
				{ width: mobile ? containerWidth * 2.55 : containerWidth * 1.4 },
			]}
		>
			<View style={studyFeedStyles.feedMainContainer}>
				<View style={studyFeedStyles.feedTopContainer}>
					<StudyAvatar onPress={showTutorProfile} imageSource={entry.tutorAvatar} />
					<View style={studyFeedStyles.feedTopTextContainer}>
						<StudyTileHeader
							title={entry.title}
							name={entry.tutorName}
							onAuthorPress={showTutorProfile}
						/>
					</View>
				</View>

				<StudyDateTime date={entry.date} rsvp={entry.rsvpCount} duration={ entry.time + " - " + entry.duration} />
				<StudyDescription text={entry.description} onPress={readMoreAboutStudy} />
				<StudyTutorImage imageUrl={entry.image} />
			</View>
		</View>
	);
};

export default StudyFeedComponent;