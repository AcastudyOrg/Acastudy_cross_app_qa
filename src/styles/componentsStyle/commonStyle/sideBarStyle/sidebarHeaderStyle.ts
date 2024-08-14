import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const sidebarHeaderStyles = StyleSheet.create({
	sidebarMediaContainer: {
		height: 35,
		justifyContent: 'flex-start',
        paddingLeft: 20
	},
	sidebarMediaItem: {
		color: COLORS.white,
		fontFamily: FONT.plusJakartaBold,
		fontSize: SIZE.xxl,
	},
});
