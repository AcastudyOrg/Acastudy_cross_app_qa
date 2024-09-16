
import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

export const tutorBioStyles = StyleSheet.create({
    section: {
      padding: 20,
      width: '85%'
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.white,
      marginBottom: 10,
    },
    bioText: {
      color: COLORS.white,
    },
  });