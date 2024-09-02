// Utils
import { forwardRef } from 'react';

// Components
import { Image, View } from 'react-native';
import LanguageDialog from './LanguageDialog';
import Typography from '@/components/core/Typography';
import SettingItem from '@/components/Pages/Profile/Settings/SettingItem';

// Hooks
import { useTranslation } from 'react-i18next';

// Types
import { TLocales } from '@/types';

// Constants
import { languagesData } from '@/components/Pages/Profile/Settings/constant';
function LanguageSwitcher(_: any, ref: any) {
  const { i18n } = useTranslation();

  const currentLocale = i18n.language as TLocales;

  return (
    <>
      <SettingItem
        onPress={() => ref?.current?.openModal()}
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
      <LanguageDialog ref={ref} />
    </>
  );
}

export default forwardRef(LanguageSwitcher);
