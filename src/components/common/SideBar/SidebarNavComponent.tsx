import React from "react";
import { View } from "react-native";

import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import SidebarFooter from "./SidebarFooter";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { useNavigation } from "@react-navigation/native";
import { sidebarNavComponentStyles } from "../../../styles/componentsStyle/commonStyle/sideBarStyle/sidebarNavComponentStyle";

const SidebarNavComponent = () => {
    const screenWidth = useScreenWidth();
    const navigation = useNavigation<any>();
	return (
		<View style={sidebarNavComponentStyles.sidebarMainContainer}>
			<View style={sidebarNavComponentStyles.sidebarTopContainer}>
				<SidebarHeader screenWidth={screenWidth} navigation={navigation}/>
				<SidebarLinks screenWidth={screenWidth}/>
			</View>
			<SidebarFooter navigation={navigation} screenWidth={screenWidth}/>
		</View>
	);
};

export default SidebarNavComponent;
