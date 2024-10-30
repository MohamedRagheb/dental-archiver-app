// Hooks
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

// Locale
import '@/lang';

// Components
import ToastComponent from '@/components/core/Toast';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// Utils
import { I18nextProvider, useTranslation } from 'react-i18next';
import I18n from '@/lang';

export default function RootLayout() {
  const { i18n } = useTranslation();

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
    <I18nextProvider i18n={I18n}>
      <Stack
        screenOptions={{
          contentStyle: {
            direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
          },
        }}
      />
      <ToastComponent />
    </I18nextProvider>
  );
}
