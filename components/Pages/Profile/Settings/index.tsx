// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Image, View } from 'react-native';
import Typography from '@/components/core/Typography';
import SettingItem from '@/components/Pages/Profile/Settings/SettingItem';
import { languagesData } from '@/components/Pages/Profile/Settings/constant';

// Types
import type { TLocales } from '@/types';
import Modal from '@/components/core/Modal';

export default function Settings() {
  const { t, i18n } = useTranslation();

  const currentLocale = i18n.language as TLocales;

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
        <SettingItem
          text={'label.language'}
          hiddenArrow
          selectedValue={
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Typography variant={'subtitle'}>{currentLocale}</Typography>
                <Image
                  height={24}
                  width={24}
                  source={{
                    uri: languagesData[currentLocale].flagUrl,
                  }}
                />
              </View>
            </View>
          }
        />
      </View>
      {/*<Modal /> */}
    </>
  );
}
