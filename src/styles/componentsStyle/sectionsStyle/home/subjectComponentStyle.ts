import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

const { width } = Dimensions.get('window');

const containerWidth = width > 900 ? width * .18 : 160;
export const subjectComponentStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: containerWidth,
        padding: 10,
        marginRight: 15,
        marginBottom: 20,
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: COLORS.midGrayOpacity,
        gap: 15,
    },
    subjectImageItem: {
        width: containerWidth * .9,
        height: containerWidth * .55,
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
