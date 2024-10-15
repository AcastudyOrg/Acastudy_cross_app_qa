import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const personalInformationComponentStyles = StyleSheet.create({
    container: {
        width: "100%",
    },
    personalInfoTitleContainer: {
        paddingBottom: 15,
    },
    personalInfoTitle: {
        color: COLORS.white,
        fontSize: SIZE.xl,
        fontFamily: FONT.plusJakartaMedium,
    },
    objectivesContainer: {
        width: "100%",
        top: 10,
    },
    objectiveText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
    },
});