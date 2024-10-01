
import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";
import { Dimensions } from "react-native";

export const tutorBioStyles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: SIZE.l,
    fontFamily: FONT.plusJakartaBold,
    color: COLORS.white,
    marginBottom: 10,
  },
  bioText: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaRegular,
  },
});