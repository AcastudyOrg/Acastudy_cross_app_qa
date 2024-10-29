import { StyleSheet } from 'react-native';
import { COLORS, SIZE, WEIGHT } from "../../../../constants";

export const studyFeedStyles = StyleSheet.create({
  mainContainer: {
		backgroundColor: COLORS.transparent,
		overflow: 'hidden',
		borderRadius: 4,
	},
	imageContainer: {
		width: '100%',
		aspectRatio: 16 / 9,
    backgroundColor: COLORS.imageBackgroundGray,
	},
	coverImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 10,
	},
	liveIndicator: {
		position: 'absolute',
		right: 8,
		bottom: 8,
		backgroundColor: COLORS.red,
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 4,
	},
	liveText: {
		color: COLORS.white,
		fontSize: SIZE.sm,
		fontWeight: WEIGHT.bold,
	},
	contentContainer: {
		padding: 8,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatarImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	titleContainer: {
		
	},
	titleText: {
		color: COLORS.white,
		fontSize: SIZE.l,
		fontWeight: WEIGHT.bold,
		marginBottom: 2,
	},
	tutorName: {
		color: COLORS.white,
		fontSize: SIZE.m,
	},
	dateText: {
		color: COLORS.white,
		fontSize: SIZE.sm,
	},
});
