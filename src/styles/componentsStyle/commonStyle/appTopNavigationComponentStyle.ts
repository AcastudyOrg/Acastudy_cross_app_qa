import { StyleSheet } from "react-native";

export const appTopNavigationComponentStyles = StyleSheet.create({
    appNavigationMainContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: "auto",
    },
    appNavigatorRouterContainer: {
      width: "15%",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    appNavigatorRouterContent: {
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-start",
      borderRadius: 10,
      overflow: "hidden",
    },
    appNavigatorLogoContainer: {
      width: "65%",
      justifyContent: "center",
      alignItems: "center",
    },
    appNavigatorLogoItem: {
      width: 100,
      height: 40,
      resizeMode: "contain",
    },
    appNavigatorUserPictureContainer: {
      width: "15%",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    appNavigatorUserPictureItem: {
      width: 40,
      height: 40,
      resizeMode: "cover",
      borderRadius: 50,
    },
  });