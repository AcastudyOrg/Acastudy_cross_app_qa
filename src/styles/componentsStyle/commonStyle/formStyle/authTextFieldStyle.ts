import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '../../../../constants';

export const authTextFieldtyles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: SIZE.m,
    marginBottom: 4,
    color: COLORS.black30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray60,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 10,
    color: COLORS.black30,
  },
  iconContainer: {
    padding: 4,
  },
});
