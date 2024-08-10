// Hooks
import { Stack, usePathname, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

// Locale
import '@/lang';

// Components
import ToastComponent from '@/components/core/Toast';
import * as SplashScreen from 'expo-splash-screen';

// Environment
import enviroment from '@/Utils/enviroment';

SplashScreen.preventAutoHideAsync();

// Utils
import 'react-native-reanimated';
import { getItem } from 'expo-secure-store';
import { useAuthStore } from '@/stores/AuthStore';

export default function RootLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { getUserData } = useAuthStore();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      if (
        !enviroment.Auth_Routes.includes(pathname) &&
        !getItem(enviroment.Token_Key)
      ) {
        router.replace('/login');
      }
    }
  }, [loaded]);

  useEffect(() => {
    getUserData();
  }, []);

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
