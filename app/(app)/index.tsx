import { SafeAreaView, Text } from 'react-native';
import CustomButton from '@/components/core/Button';

// Auth
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/AuthStore';

export default function () {
  const navigation = useNavigation();
  const { logout } = useAuthStore();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>hellso</Text>
      <CustomButton color={'red'} onPress={() => logout()} title={'signout'} />
    </SafeAreaView>
  );
}
