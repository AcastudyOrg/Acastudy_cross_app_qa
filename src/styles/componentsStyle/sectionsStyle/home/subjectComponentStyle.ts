import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const subjectComponentStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginRight: 15,
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: COLORS.midGrayOpacity,
        gap: 15,
    },
    subjectImageItem: {
        borderRadius: 5,
        alignSelf: 'center'
    },
    subjectTextCardTitle: {
        color: COLORS.lightCardGray,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaExtraBold,
        alignSelf: 'center'
    },
})
