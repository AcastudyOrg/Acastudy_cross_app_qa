import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONT, SIZE } from "../../../../constants";

export const studyFeedStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  feedMainContainer: {
    flexDirection: "column",
    gap: 4,
    padding: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: COLORS.skyBlue,
  },

  feedTopContainer: {
    flexDirection: "row",
    gap: 15,
  },
  feedAvatarContainer: {
    width: "15%",
    justifyContent: "flex-start",
  },
  feedAvatarItem: {
    width: Platform.OS ==="ios" || Platform.OS ==="android" ?50 :40,
    height: Platform.OS ==="ios" || Platform.OS ==="android" ?50 :40,
    resizeMode: "cover",
    borderRadius: 25,
  },
  feedTopTextContainer: {
    width: "75%",
    justifyContent: "space-between",
  },
  feedTopTextActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feedTopTextItemContainer: {
    width: "85%",
  },
  feedTopTextItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaExtraBold,
    fontSize: SIZE.l,
  },
  feedTopActionItemContainer: {
    width: "10%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  feedTopTextNameContainer: {
    width: "100%",
    paddingVertical: 5,
  },
  feedTopTextNameItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaBold,
    fontSize: SIZE.sm,
  },
  feedTopTextDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feedTopTextDateRsvpContainer: {
    flexDirection: "column",
    gap: 2,
  },
  feedTopTextTimeContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  feedTopTextTimeItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.sm,
  },

  feedMiddleContainer: {
    flexDirection: "column",
    paddingVertical: 8,
  },
  feedMiddleTextItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.sm,
  },

  feedBottomContainer: {
    flexDirection: "column",
    width: "100%",
  },
  feedBottomPostImageItem: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
