import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const sidebarFooterStyles = StyleSheet.create({
    sidebarBottomContainer: {
        position: "absolute",
        bottom: 30,
        left: 20,
        zIndex: 1,
    },
    sidebarBottomItemContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: COLORS.gray,
    },
    sidebarBottomItem: {
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        fontSize: SIZE.sm,
    },
});
