import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const sidebarLinksStyles = StyleSheet.create({
    sidebarLinksContainer: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 20,
        flexDirection: "column",
    },
    sidebarLinksItemsContainer: {
        paddingVertical: 15,
        flexDirection: "row",
        gap: 15,
    },
    sidebarLinksIconItem: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    sidebarLinksItems: {
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        fontSize: SIZE.m,
    },
});
