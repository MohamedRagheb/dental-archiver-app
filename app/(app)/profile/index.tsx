// Hooks
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { useAuthStore } from '@/stores/AuthStore';
import UserInformation from '@/components/Pages/Profile/UserInformation';
import { useTranslation } from 'react-i18next';

// Components
import { I18nManager, SafeAreaView, View } from 'react-native';
import Typography from '@/components/core/Typography';
import Settings from '@/components/Pages/Profile/Settings';
import Modal from '@/components/core/Modal';

export default function Profile() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { userData } = useAuthStore();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 64,
        paddingHorizontal: 16,
        gap: 16,
      }}
    >
      <Typography variant='h3'>{t('edit_profile.profile')}</Typography>
      <UserInformation userData={userData!} />
      <Settings />
    </View>
  );
}
