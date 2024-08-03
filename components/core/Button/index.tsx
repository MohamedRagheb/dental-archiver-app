import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Types
import { IProps } from './types';

import { useTranslation } from 'react-i18next';

export default function CustomButton({
  onPress,
  title,
  icon,
  ...restProps
}: IProps) {
  const { t } = useTranslation();

  const accessibilityLabel =
    restProps.accessibilityLabel ?? title.split('.').pop() ?? title;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 40,
          paddingVertical: 8,
          gap: 4,
          ...(restProps.style as object),
        }}
      >
        {icon && icon}
        <Button
          onPress={onPress}
          color={restProps.color ?? 'white'}
          accessibilityLabel={accessibilityLabel}
          title={t(title)}
          {...restProps}
        />
      </View>
    </TouchableOpacity>
  );
}
