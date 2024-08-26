import { StyleSheet, Platform, Dimensions } from "react-native";
import { COLORS, SIZE, FONT } from "../../../../constants";

const { width } = Dimensions.get("window");

export const onboardingTopBar = StyleSheet.create({
  container: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 27,
  },
  logoContainer: {
    width: "15%",
  },
  logoItem: {
    width: 150,
    height: 50,
    resizeMode: "cover",
  },
  linksContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  separator: {
    color: COLORS.white,
    fontSize: SIZE.s,
    paddingHorizontal: 10,
    fontFamily: FONT.plusJakartaExtraLight,
  },
  linkTextItem: {
    color: COLORS.white,
    fontSize: SIZE.s,
    fontFamily: FONT.plusJakartaRegular,
    ...(Platform.OS === "web" ? { cursor: "pointer" } : {}),
  },
  divider: {
    width: "95%",
    height: 0.5,
    backgroundColor: COLORS.white,
    alignSelf: "center",
    marginBottom: 2,
    opacity: 0.2,
  },
});
