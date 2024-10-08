import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const customNoStrokeTextInputStyles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderRadius: 8,
    },
    input: {
        flex: 1,
        fontSize: SIZE.m,
        lineHeight: 25,
        fontFamily: FONT.plusJakartaRegular,
        paddingHorizontal: 10,
        color: COLORS.white,
    },
    inputLabel: {
        paddingLeft: 10,
        fontSize: SIZE.sm,
        color: COLORS.textGray,
        fontFamily: FONT.plusJakartaMedium,
    },
    inputFocused: {
        borderColor: 'transparent',
        borderWidth: 0,
    },
    inputUnfocused: {
        borderColor: 'transparent',
    },
});