// Components
import Typography from '@/components/core/Typography';
import { Image, View } from 'react-native';

// Hooks
import { useTranslation } from 'react-i18next';

// Types
import { IUser } from '@/types';
import { dateToString } from '@/Utils/date';
import { useEffect } from 'react';

export default function UserInformation({ userData }: { userData: IUser }) {
  const { t } = useTranslation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        backgroundColor: '#E5E9ED',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
        cursor: 'pointer',
        shadowColor: '#ced4da',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.6,
      }}
    >
      <Image
        style={{ height: 60, width: 60, borderRadius: 50 }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Typography variant='h4'>
          {userData?.first_name + ' ' + userData?.last_name}
        </Typography>
        <Typography>
          {t('edit_profile.joined_in', {
            date: dateToString(userData?.created_at),
          })}
        </Typography>
      </View>
    </View>
  );
}
