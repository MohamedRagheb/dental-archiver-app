import { SafeAreaView, Text, View } from 'react-native';
import { deleteItemAsync } from 'expo-secure-store';
import enviroment from '@/Utils/enviroment';
import CustomButton from '@/components/core/Button';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function () {
  const router = useRouter();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const deleteToken = () => {
    deleteItemAsync(enviroment.Token_Key);
    router.replace('/login');
  };
  return (
    <>
      <SafeAreaView>
        <Text>hello</Text>
        <CustomButton
          color={'red'}
          onPress={() => deleteToken()}
          title={'logout'}
        />
      </SafeAreaView>
    </>
  );
}
