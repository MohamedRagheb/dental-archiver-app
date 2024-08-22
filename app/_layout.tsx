// Hooks
import { router, Stack, usePathname } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

// Locale
import '@/lang';

// Components
import ToastComponent from '@/components/core/Toast';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// Utils
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack />
      <ToastComponent />
    </>
  );
}
