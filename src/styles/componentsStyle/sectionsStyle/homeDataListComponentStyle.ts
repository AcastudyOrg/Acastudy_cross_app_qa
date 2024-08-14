import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../constants";

export const homeDataListComponentStyles = StyleSheet.create({
    homeDataMainContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "column",
    },
    homeDataTopContainer: {
      paddingBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    homeDataTitleItem: {
      color: COLORS.white,
      fontSize: SIZE.xl,
      fontFamily: FONT.plusJakartaBold,
    },
    homeDataActionItem: {
      color: COLORS.white,
      fontSize: SIZE.s,
      fontFamily: FONT.plusJakartaRegular,
    },
  
    //data item
    itemContainer: {
      padding: 10,
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "column",
      gap: 10,
      borderRadius: 20,
      overflow: "hidden",
      backgroundColor: COLORS.darkGray,
    },
    itemVideo: {
      width: "100%",
      height: 100,
    },
    itemImage: {
      width: 80,
      height: 80,
      resizeMode: "cover",
    },
    itemTitle: {
      color: COLORS.white,
      fontSize: SIZE.m,
      fontFamily: FONT.plusJakartaRegular,
    },
  });