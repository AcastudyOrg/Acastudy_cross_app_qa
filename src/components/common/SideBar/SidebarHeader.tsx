import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { NAV_SCREEN_NAME, STRING, VIEW_MODE } from "../../../constants/strings";
import { sidebarHeaderStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarHeaderStyle";
import { IMAGES } from "../../../constants";

type SidebarHeaderProps = {
	screenWidth: number;
	navigation: any;
	viewMode?: string;
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ screenWidth, navigation, viewMode }) => {

	const redirectToHome = VIEW_MODE.studentView === viewMode ? NAV_SCREEN_NAME.HomeScreen : NAV_SCREEN_NAME.TutorHomeScreen;
	return (
		<TouchableOpacity onPress={() => navigation.navigate(redirectToHome)} style={sidebarHeaderStyles.sidebarMediaContainer}>
			{screenWidth >= 972 && (
				<Image
					source={IMAGES.appLogo}
					alt="coming-soon-image"
					style={sidebarHeaderStyles.logoImage}
				/>
			)}
		</TouchableOpacity>
	);
};

export default SidebarHeader;
