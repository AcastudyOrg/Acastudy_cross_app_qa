import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Inter_400Regular": Inter_400Regular,
          "Inter_700Bold": Inter_700Bold,
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
