import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const customNoStrokeTextInputStyles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderRadius: 8,
    },
    input: {
        flex: 1,
        minHeight: 40,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        paddingHorizontal: 10,
        color: COLORS.white,
    },
    inputLabel: {
        paddingLeft: 10,
        fontSize: SIZE.s,
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