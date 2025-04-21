import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";
import fontFamily from "@/constants/fontFamily";

export const feedbackSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white10Percent,
    borderRadius: 10,
    padding: 10,
    height: 320,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    height: 55,
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: fontFamily.plusJakartaBold,
    color: COLORS.lightGray,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: fontFamily.plusJakartaBold,
    color: COLORS.lightGray,
    margin: 10,
  },
  scrollView: {
    flex: 1,
  },
  feedbackCard: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: COLORS.white10Percent,
    borderRadius: 10,
  },
  username: {
    fontSize: 16,
    fontFamily: fontFamily.plusJakartaBold,
    paddingTop: 5,
    color: COLORS.white50Percent,
  },
  message: {
    fontSize: 14,
    color: COLORS.white50Percent,
  },
  rating: {
    fontSize: 14,
    color: COLORS.lightGray,
  },
});