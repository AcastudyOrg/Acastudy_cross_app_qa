import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../../constants";

export const rightSectionStyles = StyleSheet.create({
	rightSection: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexShrink: 1,
		flexWrap: 'wrap'
	},
	rightSectionbuttons: {
		flexDirection: 'row',
		marginRight: 40,
	},
	linkText: {
		paddingBottom: 2,
		color: COLORS.white,
		fontFamily: FONT.plusJakartaBold,
		marginHorizontal: 10,
	},
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	profileName: {
		color: COLORS.white,
		fontFamily: FONT.plusJakartaRegular,
		marginRight: 10,
	},
	profilePicture: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
});
