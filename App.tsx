import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { COLORS } from "./src/constants";
import useFonts from "./src/hooks/useFonts";
import AppMainNavigation from "./src/navigation";
import LoadingComponent from "./src/components/common/LoadingComponent";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const fontsLoaded = useFonts();

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.mainAppContainer}>
      <StatusBar style="auto" />
      <AppMainNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
