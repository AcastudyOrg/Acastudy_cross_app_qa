import React from "react";
import { View } from "react-native";

import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import SidebarFooter from "./SidebarFooter";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { useNavigation } from "@react-navigation/native";
import { sidebarNavComponentStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarNavComponentStyle";
import { VIEW_MODE } from "@/constants/strings";

interface SidebarNavComponentrProps {
	viewMode?: string;
  }

const SidebarNavComponent: React.FC<SidebarNavComponentrProps> = ({viewMode}) => {
    const screenWidth = useScreenWidth();
    const navigation = useNavigation<any>();

	return (
		<View style={sidebarNavComponentStyles.sidebarMainContainer}>
			<View style={sidebarNavComponentStyles.sidebarTopContainer}>
				<SidebarHeader screenWidth={screenWidth} navigation={navigation}/>
				<SidebarLinks screenWidth={screenWidth} viewMode={viewMode}/>
			</View>
			{ VIEW_MODE.studentView === viewMode && (
				<SidebarFooter navigation={navigation} screenWidth={screenWidth}/>
			)}
		</View>
	);
};

export default SidebarNavComponent;
