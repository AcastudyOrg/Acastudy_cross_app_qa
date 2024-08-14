import { StyleSheet } from "react-native";
import { FONT, SIZE } from "../../../../constants";

export const bottomBarComponentStyles = StyleSheet.create({
	bottomTabMainContainer: {
		position: "absolute",
		bottom: 0,
		height: 60,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: `rgba(0,0,0,0.5)`,
	},
	sidebarLinksIconItem: {
		width: 20,
		height: 20,
		resizeMode: "contain",
		alignSelf: "center",
	},
	bottomTabContentContainer: {
		flexDirection: "column",
		paddingHorizontal: 30,
	},
	bottomTabItem: {
		paddingTop: 5,
		fontSize: SIZE.s,
		fontFamily: FONT.plusJakartaRegular,
	},
});
