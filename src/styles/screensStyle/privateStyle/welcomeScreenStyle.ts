import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const welcomeScreenStyles = StyleSheet.create({
    welcomeMainContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.black,
    },
    welcomeTopNavigationContainer: {
        width: "100%",
        flexDirection: "column",
        marginBottom: 10,
    },
});