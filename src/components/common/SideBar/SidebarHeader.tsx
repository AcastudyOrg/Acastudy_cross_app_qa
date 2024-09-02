import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { NAV_SCREEN_NAME, STRING } from "../../../constants/strings";
import { sidebarHeaderStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarHeaderStyle";
import { IMAGES } from "../../../constants";

type SidebarHeaderProps = {
	screenWidth: number;
	navigation: any;
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ screenWidth, navigation }) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)} style={sidebarHeaderStyles.sidebarMediaContainer}>
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
