import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";


export const timeSelectStyles = StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    title: {
      fontSize: 14,
      fontWeight: '500',
      color: COLORS.white,
      marginBottom: 8,
    },
    timeContainer: {
      paddingVertical: 8,
    },
    timeSlot: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: COLORS.lightGrayOpacity,
      borderRadius: 8,
      marginRight: 8,
      borderWidth: 1,
      borderColor: COLORS.white,
    },
    selectedTimeSlot: {
      backgroundColor: COLORS.purple,
      borderColor: COLORS.purple,
    },
    timeText: {
      fontSize: 16,
      fontWeight: '400',
      color: COLORS.white,
    },
    selectedTimeText: {
      color: COLORS.white,
      fontWeight: '600',
    },
    noTimesText: {
      fontSize: 16,
      fontWeight: '400',
      color: COLORS.darkGrayOpacity,
      fontStyle: 'italic',
    },
  });