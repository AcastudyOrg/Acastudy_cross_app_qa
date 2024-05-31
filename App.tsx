import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "./src/constants";
import useFonts from "./src/hooks/useFonts";
import LoadingComponent from "./src/components/common/LoadingComponent";

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    <LoadingComponent />;
  }

  return (
    <View style={styles.mainAppContainer}>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
