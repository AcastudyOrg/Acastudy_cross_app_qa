import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

export const topBarComponentStyles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 10,
        paddingTop: 20,
        backgroundColor: COLORS.transparent,
    },
    divider: {
        width: "95%",
        height: 0.5,
        backgroundColor: COLORS.white,
        alignSelf: "center",
        marginTop: 5,
        opacity: 0.2,
    },
});
