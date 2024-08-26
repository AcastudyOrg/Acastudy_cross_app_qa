import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const dropDownComponentStyles = StyleSheet.create({
    container: {
        margin: 10,
        width: '100%',
    },
    label: {
        fontSize: SIZE.m,
        marginBottom: 4,
        color: COLORS.white,
    },
    inputContainer: {
        width: '100%',
        height: 40,
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "rgba(255,255,255,.1)",
        // fontFamily: FONT.plusJakartaRegular,
        // fontSize: SIZE.m,
    },
    itemContainer: {
        top: 5,
        borderRadius: 10,
        borderColor: COLORS.transparent,
        backgroundColor: "rgba(255,255,255,.1)",
    },
    itemText: {
        color: COLORS.lightGray,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
    },
    selectedText: {
        color: COLORS.white,
        fontFamily: FONT.plusJakartaRegular,
        fontSize: SIZE.m,
    },
    placeholderText: {
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        color: "rgba(255,255,255,.5)",
    },
    iconStyle: {
        tintColor: COLORS.white
    },
});
