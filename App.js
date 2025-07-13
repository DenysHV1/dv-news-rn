//! Tags
import { StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

//! Fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

//!Navigation
import Navigate from "./Navigate.js";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    "os-variable": require("./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "os-variable-italic": require("./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container} onLayout={onLayoutRootView}>
        <Navigate />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "os-variable",
    fontSize: 20,
  },
});
