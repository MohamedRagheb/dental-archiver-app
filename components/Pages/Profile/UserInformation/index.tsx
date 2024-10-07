// Components
import { Link } from 'expo-router';
import { Image, View } from 'react-native';
import { Icon } from '@/components/core/Icon';
import Typography from '@/components/core/Typography';

// Hooks
import { useTranslation } from 'react-i18next';

// Types
import type { IUser } from '@/types';

// Utils
import { dateToString } from '@/Utils/date';

export default function UserInformation({ userData }: { userData: IUser }) {
  const { t } = useTranslation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'space-between',
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          justifyContent: 'space-between',
        }}
      >
        <Image
          style={{ height: 60, width: 60, borderRadius: 50 }}
          source={{
            uri: userData?.avatar?.url,
          }}
        />
        <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Typography variant='h4'>
            {userData?.first_name + ' ' + userData?.last_name}
          </Typography>
          <Typography style={{ color: '#6c757d' }}>
            {t('edit_profile.joined_in', {
              date: dateToString(userData?.created_at),
            })}
          </Typography>
        </View>
      </View>
      <Link style={{ alignSelf: 'center' }} href={'/edit-profile'}>
        <Icon
          style={{ alignSelf: 'center' }}
          name={'edit'}
          lib={'FontAwesome'}
        />
      </Link>
    </View>
  );
}
