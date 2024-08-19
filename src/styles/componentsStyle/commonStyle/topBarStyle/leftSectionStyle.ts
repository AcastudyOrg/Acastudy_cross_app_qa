import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const leftSectionStyles = StyleSheet.create({
	leftSection: {
		flex: 1,
		maxWidth: '100%',
		flexShrink: 1,
	},
	appName : {
		height: 40,
		justifyContent: 'flex-start',
        paddingLeft: 20,
		color: COLORS.white,
		fontFamily: FONT.plusJakartaBold,
		fontSize: SIZE.xxl,
	}, 
	searchInput: {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 10,
		paddingHorizontal: 15,
		color: COLORS.white,
		fontFamily: FONT.plusJakartaRegular,
		height: 40,
		maxWidth: '100%',
		minWidth: '10%',
	},
});
