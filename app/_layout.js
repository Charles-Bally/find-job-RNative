import { Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
