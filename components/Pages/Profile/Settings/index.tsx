// Hooks
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { View } from 'react-native';
import Typography from '@/components/core/Typography';
import LanguageSwitcher from '@/components/Pages/Profile/Settings/LanguageSwitcher';

// Types
import { IModalRef } from '@/components/core/Modal/types';
import ChangePassword from '@/components/Pages/Profile/Settings/ChangePassword';

export default function Settings() {
  const { t, i18n } = useTranslation();

  const modalRef = useRef<IModalRef>();

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingHorizontal: 8,
          paddingVertical: 8,
          height: '100%',
        }}
      >
        <Typography variant='h3'>{t('edit_profile.settings')}</Typography>
        <ChangePassword />
        <LanguageSwitcher ref={modalRef} />
      </View>
    </>
  );
}
