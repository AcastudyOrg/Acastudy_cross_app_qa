import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONT, SIZE } from "../../../constants";
import { AppColor } from "../../../constants/colors";
import { NAV_SCREEN_NAME, STRING } from "../../../constants/strings";

type SidebarHeaderProps = {
	screenWidth: number;
	navigation: any;
};

const SidebarHeader:  React.FC<SidebarHeaderProps> = ({screenWidth, navigation}) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.HomeScreen)} style={styles.sidebarMediaContainer}>
            {screenWidth >= 972 && (
                <Text style={styles.sidebarMediaItem}> {STRING.appName} </Text>
            )}
		</TouchableOpacity>
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
		fontFamily: FONT.plusJakartaBold,
		fontSize: SIZE.xxl,
	},
});

export default SidebarHeader;
