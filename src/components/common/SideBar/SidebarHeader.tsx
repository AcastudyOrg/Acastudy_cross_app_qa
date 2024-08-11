import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONT, SIZE } from "../../../constants";
import { AppColor } from "../../../constants/colors";

const SidebarHeader = () => {
	return (
		<View style={styles.sidebarMediaContainer}>
			<Text style={styles.sidebarMediaItem}>ACASTUDY</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	sidebarMediaContainer: {
		height: 35,
		justifyContent: 'flex-start',
        paddingLeft: 20
	},
	sidebarMediaItem: {
		color: AppColor.white,
		fontFamily: FONT.interBold,
		fontSize: SIZE.xxl,
	},
});

export default SidebarHeader;
