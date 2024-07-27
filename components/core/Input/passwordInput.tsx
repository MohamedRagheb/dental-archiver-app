// Components
import Input from '@/components/core/Input/index';

import { Text } from 'react-native';

// Types
import { ITextInputProps } from '@/components/core/Input/types';

// React Hook Form
import { FieldValues } from 'react-hook-form';

// Hooks
import { useState } from 'react';

export default function PasswordInput<T extends FieldValues>({
  ...props
}: ITextInputProps<T>) {
  const [isPlain, setIsPlain] = useState(false);

  return (
    <Input
      icon={{
        name: isPlain ? 'eye' : 'eye-with-line',
        lib: 'Entypo',
        onPress: () => setIsPlain(!isPlain),
      }}
      secureTextEntry={!isPlain}
      {...props}
    />
  );
}
