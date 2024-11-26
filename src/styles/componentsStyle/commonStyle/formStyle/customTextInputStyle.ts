import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const customTextInputStyles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
    },
    label: {
        fontSize: SIZE.m,
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        paddingBottom: 15,
    },
    input: {
        flex: 1,
        padding: 10,
        minHeight: 150,
        borderRadius: 8,
        borderWidth: 0,
        color: COLORS.white,
        textAlignVertical: 'top',
        fontFamily: FONT.plusJakartaRegular,
        borderColor: COLORS.transparent,
        backgroundColor: COLORS.white10Percent,
    }
});