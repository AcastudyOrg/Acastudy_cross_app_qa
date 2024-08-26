import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";

export const textInputComponentStyles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
    flexDirection: "column",
  },
  textInputLabelTextItem: {
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.plusJakartaBold,
    marginBottom: 10,
  },
  textInputItemContentContainer: {
    width: "100%",
    height: 40,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 10,
  },
  focusedBorder: {
    borderWidth: 2,
    borderColor: COLORS.darkBlue,
  },
  normalBorder: {
    borderWidth: 2,
    borderColor: COLORS.green,
  },
  transparentBorder: {
    borderWidth: 2,
    borderColor: COLORS.transparent,
  },
  errorBorder: {
    borderWidth: 2,
    borderColor: COLORS.red,
  },
  textInputItemContainer: {
    width: "90%",
    justifyContent: "center",
  },
  textInputItem: {
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.plusJakartaRegular,
  },
  textInputIconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: COLORS.red,
    fontSize: SIZE.s,
    marginTop: 5,
  },
});
