import Dialog from '@/components/core/Modal';
import {
  I18nManager,
  Image,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Each } from '@/components/core/Each';
import { TLocales } from '@/types';
import Typography from '@/components/core/Typography';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';

// Constants
import enviroment from '@/Utils/enviroment';
import { languagesData } from '@/components/Pages/Profile/Settings/constant';
import { setItemAsync } from 'expo-secure-store';

import { reloadAsync } from 'expo-updates';

const LanguageDialog = (_: any, modalRef: any) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = async (newLocale: TLocales) => {
    await i18n.changeLanguage(newLocale);
    await setItemAsync(enviroment.Locale_key, newLocale);
    modalRef?.current?.closeModal();
    await reloadAsync();
  };

  return (
    <Dialog persistent ref={modalRef} title='system_language'>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Each<TLocales>
          of={enviroment.supportedLanguages}
          render={(item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handleChangeLanguage(item)}
            >
              <View style={{ display: 'flex', gap: 16, flexDirection: 'row' }}>
                <Image
                  height={28}
                  width={28}
                  source={{
                    uri: languagesData[item].flagUrl,
                  }}
                />
                <Typography variant={'h5'}>{t(`languages.${item}`)}</Typography>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </Dialog>
  );
};

export default forwardRef(LanguageDialog);
