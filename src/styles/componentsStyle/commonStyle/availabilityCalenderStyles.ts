import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";


export const availablilityCalenderStyles = StyleSheet.create({
    container: {
      borderRadius: 10,
      overflow: 'hidden',
      ...Platform.select({
        ios: {
          shadowColor: COLORS.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 5,
        },
      }),
    },
  });