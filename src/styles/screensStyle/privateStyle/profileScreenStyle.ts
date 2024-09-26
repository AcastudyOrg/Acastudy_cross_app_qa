import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const profileScreenStyles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
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
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  topProfileTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topProfileTextEmptyContainer: {
    width: "25%",
  },
  topProfileTextNameContainer: {
    width: "50%",
    alignItems: "center",
    flexDirection: "column",
    gap: 2,
  },
  topProfileTextNameItem: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaBold,
  },
  topProfileTextNameItems: {
    color: COLORS.white,
    fontSize: SIZE.s,
    fontFamily: FONT.plusJakartaRegular,
    opacity: 0.6,
  },
  topProfileButtonContainer: {
    width: "25%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  titleTextItemContainer: {
    flexDirection: "column",
  },
  titleTextItem: {
    fontFamily: FONT.plusJakartaExtraBold,
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
    gap: 15,
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
    fontFamily: FONT.plusJakartaRegular,
    fontSize: Platform.OS === "web" ? SIZE.xs : SIZE.s,
    opacity: 0.7,
  },
  title: {
    color: "white",
    fontSize: SIZE.m,
    fontWeight: "bold",
    marginBottom: 16,
  },
  table: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#858AA4",
    padding: 12,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#2A2A3F",
    borderTopWidth: 1,
    borderTopColor: "#3D3D56",
  },
  headerCell: {
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
    minWidth: 100,
  },
  cell: {
    color: COLORS.white,
    padding: 12,
    textAlign: "left",
    flex: 1,
    minWidth: 100,
  },
  tableText: {
    fontSize: SIZE.s,
    color: COLORS.white,
  },
  actionCell: {
    flex: 1,
    minWidth: 100,
  },
  actionText: {
    fontSize: SIZE.s,
    color: COLORS.white,
  },
});
