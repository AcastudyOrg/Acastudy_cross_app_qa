import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const SearchInputComponentStyles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaBold,
    borderColor: COLORS.transparent,
    color: COLORS.black,
  },
});
