import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, WEIGHT } from "../../../../constants";

export const buttonComponentStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: COLORS.gray,
    zIndex: 1,
  },
  buttonTextItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.sm,
  },
  iconContainer: {
    marginRight: 2,
  },
});
