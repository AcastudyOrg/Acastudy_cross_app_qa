import { StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../../constants";

export const authScreenStyle = StyleSheet.create({
  signInContentContainer: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
    width: 400,
  },
  title: {
    fontSize: SIZE.xxl,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  divider: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerText: {
    paddingBottom: 20,
    paddingHorizontal: 16,
    color: COLORS.gray
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  clickerbleText: {
    color: COLORS.blue
  },
  alternative: {
    alignSelf: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20
  }
});