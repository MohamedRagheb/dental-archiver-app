// Types
import { PropsWithChildren } from 'react';
import { ITypographyProps, Rules } from './rules';

// Components
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Typography({
  children,
  variant = 'subtitle',
  ...props
}: PropsWithChildren<ITypographyProps>) {
  const { i18n } = useTranslation();
  const { style, ...restProps } = props;

  const rule = Rules[variant];
  return (
    <Text
      style={{
        ...rule,
        ...{ textAlign: i18n.language === 'en' ? 'right' : 'left' },
        ...(style as any),
      }}
      {...restProps}
    >
      {children}
    </Text>
  );
}
