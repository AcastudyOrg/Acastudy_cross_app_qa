import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const profileScreenStyles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 30,
    gap: 30,
  },

  topProfileContainer: {
    flexDirection: "column",
  },
  topProfileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  topProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    resizeMode: "cover",
  },
  topProfileTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topProfileTextNameContainer: {
    width: "50%",
    alignItems: "center",
    flexDirection: "column",
    gap: 2,
  },
  topProfileTextNameItem: {
    color: COLORS.white,
    paddingVertical: 5,
    fontSize: SIZE.xxl,
    fontFamily: FONT.plusJakartaBold,
  },
  topProfileTextNameItems: {
    fontSize: SIZE.m,
    color: COLORS.textGray,
    fontFamily: FONT.plusJakartaRegular,
  },
  topProfileButtonContainer: {
    width: 150,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  titleTextItemContainer: {
    flexDirection: "column",
  },
  titleTextItem: {
    fontFamily: FONT.plusJakartaMedium,
    color: COLORS.white,
    fontSize: SIZE.xl,
    paddingBottom: 20,
  },
  upcomingItemContainer: {
    width: "100%",
    flexDirection: "row",
  },
  upcomingItemContentContainer: {
    flexDirection: "column",
    paddingRight: 20,
    gap: 10,
  },
  upcomingImageItem: {
    resizeMode: "cover",
    borderRadius: 10,
  },
  upcomingTitleContainer: {
    flexDirection: "column",
    gap: 3,
  },
  upcomingTitleItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaMedium,
    fontSize: SIZE.m,
  },
  upcomingInfoItem: {
    color: COLORS.textGray,
    fontFamily: FONT.plusJakartaExtraLight,
    fontSize: SIZE.m,
  },
  table: {
    borderRadius: 8,
    borderWidth: .5,
    borderColor: COLORS.darkGrayOpacity,
    overflow: "hidden",
    width: "100%",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.studentProfileTableHeader,
    padding: 12,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: COLORS.transparent,
    borderTopWidth: .3,
    borderTopColor: COLORS.white,
  },
  headerCell: {
    flex: 1,
    minWidth: 100,
  },
  cell: {
    flex: 1,
    minWidth: 100,
    paddingVertical: 25,
    padding: 12,
    color: COLORS.white,
  },
  headerText: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaBold,
  },
  tableText: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  actionCell: {
    flex: 1,
    minWidth: 100,
  },
  actionText: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaExtraLight,
    textAlign: "left",
  },
});
