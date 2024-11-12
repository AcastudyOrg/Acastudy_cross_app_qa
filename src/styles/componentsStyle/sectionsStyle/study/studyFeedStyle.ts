import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE, WEIGHT } from "../../../../constants";

export const studyFeedStyles = StyleSheet.create({
	studyTextContainer: {
		paddingVertical: 10,
		paddingHorizontal: "2.2%",
	},
	studyTitleText: {
		color: COLORS.white,
		fontSize: SIZE.l,
		fontFamily: FONT.plusJakartaMedium,
		fontWeight: "bold",
	},
	studyScrollWrap: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingBottom: 50,
		left: 25,
	},
	itemContainer: {
		overflow: 'hidden',
		paddingHorizontal: 5,
		marginBottom: 25,
		backgroundColor: COLORS.transparent,
	},
	
	imageContainer: {
		width: '100%',
		aspectRatio: 16 / 9,
		borderRadius: 5,
		backgroundColor: COLORS.imageBackgroundGray,
	},
	coverImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 5,
	},
	liveIndicator: {
		position: 'absolute',
		right: 8,
		bottom: 8,
		backgroundColor: COLORS.fullRed,
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 2,
	},
	liveText: {
		color: COLORS.white,
		fontSize: SIZE.s,
		fontWeight: WEIGHT.bold,
	},
	contentContainer: {
		paddingLeft: 8,
		paddingTop: 3,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},

	menuIconContainer: {
		top: 5,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatarImage: {
		width: 30,
		height: 30,
		borderRadius: 25,
		marginRight: 10,
	},
	titleText: {
		color: COLORS.white,
		fontSize: SIZE.m,
		fontFamily: FONT.plusJakartaMedium,
	},
	tutorName: {
		color: COLORS.white,
		fontSize: SIZE.s,
		fontFamily: FONT.plusJakartaRegular,
		opacity: 0.8,
	},
	dateText: {
		right: 1,
		color: COLORS.white,
		fontSize: SIZE.xs,
		fontFamily: FONT.plusJakartaRegular,
		opacity: 0.5,
	},
});
