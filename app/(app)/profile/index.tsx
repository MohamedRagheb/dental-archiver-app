import { SafeAreaView, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { useAuthStore } from '@/stores/AuthStore';
import UserInformation from '@/components/Pages/Profile/UserInformation';

export default function Profile() {
  const navigation = useNavigation();

  const { userData } = useAuthStore();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingVertical: 32,
          paddingHorizontal: 16,
        }}
      >
        <UserInformation userData={userData!} />
      </View>
    </SafeAreaView>
  );
}
