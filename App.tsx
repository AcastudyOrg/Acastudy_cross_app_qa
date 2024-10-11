import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { COLORS } from "./src/constants";
import useFonts from "./src/hooks/useFonts";
import AppMainNavigation from "./src/navigation";
import { LoadingComponent } from "./src/components/";
import useDeepLinking from "./src/hooks/useDeepLinking";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const fontsLoaded = useFonts();
  const linking = useDeepLinking();

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          setAppIsReady(true);
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn("Error loading fonts: ", e);
      }
    }

    prepare();
  }, [fontsLoaded]);


  if (!appIsReady) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.mainAppContainer}>
      <StatusBar style="light" />
      <NavigationContainer
        linking={linking}
        fallback={<LoadingComponent />}
      >
        <AppMainNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
