import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

export const googleButtonStyle = StyleSheet.create({
	button: {
		backgroundColor: COLORS.white,
		padding: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		marginVertical: 10,
		width: '100%',
	},
	buttonText: {
		marginTop: 2,
		marginLeft: 5,
		color: COLORS.darkGray,
		fontSize: 16,
	},
	image: {
		width: 24,
		height: 24,
		resizeMode: "contain"
	}
});