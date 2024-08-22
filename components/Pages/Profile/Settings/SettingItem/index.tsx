import { Text, View } from 'react-native';
import { Icon } from '@/components/core/Icon';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@/components/core/Typography';

export default function SettingItem({
  text,
  selectedValue,
  hiddenArrow,
}: {
  text: string;
  selectedValue?: ReactNode;
  hiddenArrow?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
      }}
    >
      <Typography style={{ color: '#6c757d', fontWeight: 600 }} variant='h5'>
        {t(text)}
      </Typography>
      {!!selectedValue && selectedValue}
      {!hiddenArrow && (
        <Icon
          style={{ color: 'gray' }}
          name='arrow-forward-ios'
          lib='MaterialIcons'
        />
      )}
    </View>
  );
}
