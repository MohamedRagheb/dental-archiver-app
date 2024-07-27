// Types
import { PropsWithChildren } from 'react';
import { ITypographyProps, Rules } from './rules';

// Components
import { Text } from 'react-native';

export default function Typography({
  children,
  variant,
  ...props
}: PropsWithChildren<ITypographyProps>) {
  const { style, ...restProps } = props;

  const rule = Rules[variant];
  return (
    <Text style={{ ...(style as any), ...rule }} {...restProps}>
      {children}
    </Text>
  );
}
