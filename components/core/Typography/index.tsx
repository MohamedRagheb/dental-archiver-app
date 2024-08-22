// Types
import { PropsWithChildren } from 'react';
import { ITypographyProps, Rules } from './rules';

// Components
import { Text } from 'react-native';

export default function Typography({
  children,
  variant = 'subtitle',
  ...props
}: PropsWithChildren<ITypographyProps>) {
  const { style, ...restProps } = props;

  const rule = Rules[variant];
  return (
    <Text style={{ ...rule, ...(style as any) }} {...restProps}>
      {children}
    </Text>
  );
}
