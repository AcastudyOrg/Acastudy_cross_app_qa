import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const chatSearchBarStyles = StyleSheet.create({

  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    height: 40,
    width: '100%',
  },
});
