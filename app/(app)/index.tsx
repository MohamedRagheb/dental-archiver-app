import { SafeAreaView, Text, View } from 'react-native';
import { deleteItemAsync } from 'expo-secure-store';
import enviroment from '@/Utils/enviroment';
import CustomButton from '@/components/core/Button';
import { useRouter } from 'expo-router';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/AuthStore';

export default function () {
  const router = useRouter();
  const navigation = useNavigation();

  const { logout } = useAuthStore();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const deleteToken = async () => {
    await logout();
    router.replace('/login');
  };
  return (
    <SafeAreaView>
      <Text>hellso</Text>
      <CustomButton
        color={'red'}
        onPress={() => deleteToken()}
        title={'logout'}
      />
    </SafeAreaView>
  );
}
