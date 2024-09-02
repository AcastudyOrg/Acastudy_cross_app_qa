import * as Font from "expo-font";
import { useEffect, useState } from "react";
import {
  PlusJakartaSans_200ExtraLight,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from "@expo-google-fonts/plus-jakarta-sans";

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          PlusJakartaSans_500Medium: PlusJakartaSans_500Medium,
          PlusJakartaSans_200ExtraLight: PlusJakartaSans_200ExtraLight,
          PlusJakartaSans_400Regular: PlusJakartaSans_400Regular,
          PlusJakartaSans_700Bold: PlusJakartaSans_700Bold,
          PlusJakartaSans_800ExtraBold: PlusJakartaSans_800ExtraBold,
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts: ", error);
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useFonts;
