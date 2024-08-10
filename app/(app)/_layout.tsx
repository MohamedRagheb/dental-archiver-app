import { type PropsWithChildren, useEffect } from 'react';
import { Stack, useNavigation } from 'expo-router';

// Components
import AppNavigation from '@/components/Layout/MainLayout/AppNavigation';

export default function AppLayout({ children }: PropsWithChildren<any>) {
  // Handel Page Settings
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <Stack />
      <AppNavigation />
    </>
  );
}
