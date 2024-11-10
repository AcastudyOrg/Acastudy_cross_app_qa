import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

const globalStyle = StyleSheet.create({
  indicatorContainer: {
    width: 60,
    height: 20,
    top: 5,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Indicator: {
    width: 5,
    height: 5,
    top: 1,
    borderRadius: 6,
  },
  indicatorText: {
    fontSize: SIZE.s,
    fontFamily: FONT.plusJakartaRegular
  },
});

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white10Percent,
    marginBottom: 3,
  },
  pofileSection: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },

  offlineIndicatorContainer: {
    ...globalStyle.indicatorContainer,
    backgroundColor: COLORS.white10Percent,
  },
  offlineIndicator: {
    ...globalStyle.Indicator,
    backgroundColor: COLORS.appearDirtyWhite,
  },
  offlineText: {
    ...globalStyle.indicatorText,
    color: COLORS.appearDirtyWhite,
  },

  onlineIndicatorContainer: {
    ...globalStyle.indicatorContainer,
    backgroundColor: COLORS.green19Percent,
  },
  onlineIndicator: {
    ...globalStyle.Indicator,
    backgroundColor: COLORS.lightGreen,
  },
  onlineText: {
    ...globalStyle.indicatorText,
    color: COLORS.lightGreen,
  },

  rightContainer: {
    left: 10,
  },
  userName: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaMedium
  },
});
