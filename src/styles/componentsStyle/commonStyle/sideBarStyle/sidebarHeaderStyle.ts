import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const sidebarHeaderStyles = StyleSheet.create({
	sidebarMediaContainer: {
		height: 35,
		justifyContent: 'flex-start',
        paddingLeft: 20
	},
	logoImage:  {
      width: 200,
      height: 67,
	  right: 45,
	  bottom: 15,
      resizeMode: 'contain',
    },
});
