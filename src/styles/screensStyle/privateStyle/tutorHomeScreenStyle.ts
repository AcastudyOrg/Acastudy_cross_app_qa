import { StyleSheet} from "react-native";
import { COLORS } from "@/constants";

export const tutorHomeScreenStyle = StyleSheet.create({
    horizontalDevider: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: COLORS.transparent,
      padding: 20,
      gap: 20,
      marginHorizontal: 10,
    },
    verticalDevider: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.transparent,
        gap: 20,
      },
})