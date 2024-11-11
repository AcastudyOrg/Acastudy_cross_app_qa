import { StyleSheet } from "react-native";
import { isPlatformIOSorAndroid } from "../../../../utils/config";
import { COLORS, SIZE } from "../../../constants";

export const requestTutorStyles = StyleSheet.create({
	container: {
		paddingVertical: 30
	},
	dropDownContainer: {
		flexDirection: isPlatformIOSorAndroid() ? 'column' : 'row',
		justifyContent: isPlatformIOSorAndroid() ? 'center' : 'space-between',
		marginHorizontal: isPlatformIOSorAndroid() ? 0 : 30
	},
	input: {
		width: 'auto',
		padding: 30,
	},
	Dropdown: {
		paddingRight: 20,
		width: isPlatformIOSorAndroid() ? "100%" : "50%",
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
	availabilityCalendar: {
		justifyContent: isPlatformIOSorAndroid() ? 'center' : 'flex-start',
		width: isPlatformIOSorAndroid() ? '100%' : 'auto',
	},
	textAreaContainer: {
		paddingHorizontal: 15,
		marginVertical: 20
	},
});