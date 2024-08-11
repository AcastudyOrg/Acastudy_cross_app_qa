import React from "react";
import { View, StyleSheet } from "react-native";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import SidebarFooter from "./SidebarFooter";

const SidebarNavComponent = () => {
	return (
		<View style={styles.sidebarMainContainer}>
			<View style={styles.sidebarTopContainer}>
				<SidebarHeader />
				<SidebarLinks />
			</View>
			<SidebarFooter />
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
