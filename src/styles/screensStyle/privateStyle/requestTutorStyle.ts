import { StyleSheet } from "react-native";
import { isPlatformAndroid, isPlatformOS } from "../../../../utils/config";
import { COLORS, SIZE } from "../../../constants";

export const requestTutorStyles = StyleSheet.create({
	container: {
		paddingVertical: 30
	},
	dropDownContainer: {
		flexDirection: isPlatformOS() || isPlatformAndroid() ? 'column' : 'row',
		justifyContent: isPlatformOS() || isPlatformAndroid() ? 'center' : 'space-between',
		marginHorizontal: isPlatformOS() || isPlatformAndroid() ? 0 : 30
	},
	input: {
		width: 'auto',
		padding: 30,
	},
	Dropdown: {
		paddingRight: 20,
		width: isPlatformOS() || isPlatformAndroid() ? "100%" : "50%",
	},
	requestTutorButton: { 
		width: '80%', 
		justifyContent: 
		'center', 
		alignSelf: 
		'center' 
	},
	availabilityLabel: {
        fontSize: SIZE.m,
        marginBottom: 4,
        color: COLORS.white,
    },
    availabilityCalendar: {
        justifyContent: isPlatformOS() || isPlatformAndroid() ? 'center' : 'flex-start',
		width: isPlatformOS() || isPlatformAndroid() ? '100%' : 'auto',
    },
	textAreaContainer: {
		paddingHorizontal: 5,
	},
});