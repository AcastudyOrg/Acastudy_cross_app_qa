import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Linking from 'expo-linking';

import { COLORS } from "./src/constants";
import useFonts from "./src/hooks/useFonts";
import AppMainNavigation from "./src/navigation";
import { LoadingComponent } from "./src/components/";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const fontsLoaded = useFonts();

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

  // ___________________Deep_Linking: Handle incoming links_______________________
  const prefix = Linking.createURL("http://localhost:8081/");
  React.useEffect(() => {
    const handleDeepLink = (event: any) => {
      const data = Linking.parse(event.url);
      console.log("deeplink data: ", data);
    };

    const subscription = Linking.addEventListener("url", handleDeepLink);
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const linking = {
    prefixes: [prefix, "acastudy_ts_app"],
    config: {
      screens: {
        OnboardingScreen: {
          path: "web/onboarding",
        },
        PrivacyPolicyScreen: {
          path: "web/privacypolicy",
        },
        TermsOfUseScreen: {
          path: "web/termsofuse",
        },
        HomeScreen: {
          path: "web/home",
        },
        CallScreen: {
          path: "web/meeting-room",
        },
        ChatScreen: {
          path: "web/chat",
        },
        StudentProfileScreen: {
          path: "web/student-profile",
        },
        StudyScreen: {
          path: "web/study",
        },
        TutorProfileScreen: {
          path: "web/tutor-profile",
        },
      },
    },
  };
  // ____________________Linking-End_____________________

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
