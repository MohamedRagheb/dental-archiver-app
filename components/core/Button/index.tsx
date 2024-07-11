import { Button, TouchableOpacity, View } from 'react-native';

// Types
import { IProps } from './types';

import { useTranslation } from 'react-i18next';

export default function CustomButton({ onPress, title, ...restProps }: IProps) {
  const { t } = useTranslation();

  const accessibilityLabel =
    restProps.accessibilityLabel ?? title.split('.').pop() ?? title;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View
        style={{
          ...{
            alignSelf: 'center',
            paddingHorizontal: 40,
            paddingVertical: 8,
          },
          ...(restProps.style as object),
        }}
      >
        <Button
          color={restProps.color ?? 'white'}
          accessibilityLabel={accessibilityLabel}
          onPress={onPress}
          title={t(title)}
          {...restProps}
        />
      </View>
    </TouchableOpacity>
  );
}
