import React from "react";
import { View, StyleSheet } from "react-native";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import SidebarFooter from "./SidebarFooter";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { useNavigation } from "@react-navigation/native";

const SidebarNavComponent = () => {
    const screenWidth = useScreenWidth();
    const navigation = useNavigation<any>();
	return (
		<View style={styles.sidebarMainContainer}>
			<View style={styles.sidebarTopContainer}>
				<SidebarHeader screenWidth={screenWidth} navigation={navigation}/>
				<SidebarLinks screenWidth={screenWidth}/>
			</View>
			<SidebarFooter screenWidth={screenWidth} navigation={navigation}/>
		</View>
	);
};

const styles = StyleSheet.create({
	sidebarMainContainer: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 20,
		paddingHorizontal: 10,
		backgroundColor: `rgba(0,0,0,0.2)`,
	},
	sidebarTopContainer: {
		width: "100%",
	},
});

export default SidebarNavComponent;
