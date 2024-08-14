import { StyleSheet } from "react-native";
import { FONT, SIZE } from "../../constants";

export const bottomMobileNavStyleS = StyleSheet.create({
    bottomTabMainContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 60,
      height: 80,
      backgroundColor: `rgba(0,0,0,0.2)`,
      position: "absolute",
      bottom: -30,
    },
    sidebarLinksIconItem: {
      width: 20,
      height: 20,
      resizeMode: "contain",
      alignSelf: "center",
    },
    bottomTabContentContainer: {
      flexDirection: "column",
      paddingRight: 60,
    },
    bottomTabItem: {
      paddingTop: 5,
      fontSize: SIZE.s,
      fontFamily: FONT.plusJakartaRegular,
    },
  });
  