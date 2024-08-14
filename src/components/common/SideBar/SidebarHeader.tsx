import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NAV_SCREEN_NAME, STRING } from "../../../constants/strings";
import { sidebarHeaderStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarHeaderStyle";

type SidebarHeaderProps = {
	screenWidth: number;
	navigation: any;
};

const SidebarHeader:  React.FC<SidebarHeaderProps> = ({screenWidth, navigation}) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)} style={sidebarHeaderStyles.sidebarMediaContainer}>
            {screenWidth >= 972 && (
                <Text style={sidebarHeaderStyles.sidebarMediaItem}> {STRING.appName} </Text>
            )}
		</TouchableOpacity>
	);
};

export default SidebarHeader;
