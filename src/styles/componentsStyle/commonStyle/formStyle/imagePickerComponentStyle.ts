import { StyleSheet } from "react-native";

export const imagePickerComponentStyles = StyleSheet.create({
    imagePickerMainContainer: {
      width: "100%",
    },
    imagePickerContentContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    imagePickerItem: {
      width: 130,
      height: 130,
      borderRadius: 0,
      resizeMode: "cover",
    },
    imagePickedItem: {
      width: 130,
      height: 130,
      borderRadius: 70,
      resizeMode: "cover",
    },
    imageIconItem: {
      position: "absolute",
      bottom: 0,
      right: 140,
    },
  });