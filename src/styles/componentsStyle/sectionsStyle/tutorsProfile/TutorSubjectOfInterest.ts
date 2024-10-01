import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const tutorSubjectOfInterestStyles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: SIZE.l,
    fontFamily: FONT.plusJakartaBold,
    color: COLORS.white,
    marginBottom: 10,
  },
  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subjectTag: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  subjectText: {
    color: COLORS.darkBlue,
    fontSize: SIZE.sm,
    fontFamily: FONT.plusJakartaRegular,
  },
});