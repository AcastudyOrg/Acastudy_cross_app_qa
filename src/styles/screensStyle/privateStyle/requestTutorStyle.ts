import { StyleSheet } from "react-native";
import { isPlatformAndroid, isPlatformOS } from "../../../../utils/config";

export const requestTutorStyles = StyleSheet.create({
	container: {
		paddingVertical: 30
	},
	dropDownContainer: {
		flexDirection: isPlatformOS() || isPlatformAndroid() ? 'column' : 'row',
		justifyContent: isPlatformOS() || isPlatformAndroid() ? 'center' : 'space-between',
		marginHorizontal: 30
	},
	input: {
		width: 'auto',
		padding: 30,
	},
	Dropdown: {
		paddingRight: 20,
		width: isPlatformOS() || isPlatformAndroid() ? "100%" : "50%",
	},
	button: {
		backgroundColor: '#2196F3',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},

});