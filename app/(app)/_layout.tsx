import { type PropsWithChildren, useEffect } from 'react';
import { router, Slot, Stack, Tabs, useNavigation } from 'expo-router';

// Components
import AppNavigation from '@/components/Layout/MainLayout/AppNavigation';
import { useAuthStore } from '@/stores/AuthStore';
import { getItem } from 'expo-secure-store';
import enviroment from '@/Utils/enviroment';

export default function AppLayout() {
  const { getUserData, setUserData } = useAuthStore();
  // Handel Page Settings
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (!getItem(enviroment.Token_Key)) {
      setUserData({ userData: null, token: null });
    }
  }, []);

  return (
    <>
      <Slot />
      <AppNavigation />
    </>
  );
}
