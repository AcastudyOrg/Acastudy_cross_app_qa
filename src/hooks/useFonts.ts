import * as Font from "expo-font";
import { useEffect, useState } from "react";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          PlusJakartaSans_400Regular: PlusJakartaSans_400Regular,
          PlusJakartaSans_700Bold: PlusJakartaSans_700Bold,
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
