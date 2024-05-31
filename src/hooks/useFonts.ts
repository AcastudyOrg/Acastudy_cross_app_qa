import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Inter_400Regular,
        Inter_700Bold,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useFonts;
