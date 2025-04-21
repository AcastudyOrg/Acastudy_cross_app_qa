import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";
import fontFamily from "@/constants/fontFamily";

export const tutorGeneratedMoneyChartStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 0,
        backgroundColor: COLORS.white10Percent,
        borderRadius: 16,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        marginLeft: 10,
        marginTop: 10,
        fontFamily: fontFamily.plusJakartaBold,
    },
    chartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
