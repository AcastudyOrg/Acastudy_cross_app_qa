import { Platform, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const customTextInputStyles = StyleSheet.create({
    container: {
        paddingHorizontal: "3%"
    },
    label: {
        fontSize: SIZE.m,
        color: COLORS.white,
        paddingBottom: 5,
        fontFamily: FONT.plusJakartaRegular
    },
    input: {
        flex: 1,
        padding: 5,
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        minHeight: 150,
        borderRadius: 8,
        borderColor: COLORS.transparent,
        borderWidth: 0,
        textAlignVertical: 'top',
        backgroundColor: COLORS.white10Percent,
    }
});