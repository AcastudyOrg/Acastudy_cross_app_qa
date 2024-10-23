import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export default  StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 5
  },
  filterTab: {
    marginRight: 16,
    paddingBottom: 8,
  },
  activeFilterTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.purple,
  },
  filterText: {
    color: COLORS.appearDirtyWhite,
    fontSize: SIZE.sm,
    fontFamily: FONT.plusJakartaRegular
  },
  activeFilterText: {
    color: COLORS.purple,
  },
});
