import { StyleSheet } from "react-native";
import { isPlatformIOSorAndroid } from "../../../../utils/config";
import { COLORS, SIZE } from "../../../constants";

export const requestTutorStyles = StyleSheet.create({
	container: {
		paddingVertical: 30,
	},
	dropDownContainer: {
		marginHorizontal: isPlatformIOSorAndroid() ? 0 : 30
	},
	textAreaContainer: {
		paddingHorizontal: 5
	},
	input: {
		width: 'auto',
		padding: 30,
	},
	Dropdown: {
		paddingRight: 20,
	},
	setTimeDropDownContainer: {
		flex: 1,
	},
	requestTutorButton: {
		width: '80%',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	availabilityLabel: {
		fontSize: SIZE.m,
		marginBottom: 4,
		color: COLORS.white,
	},
});