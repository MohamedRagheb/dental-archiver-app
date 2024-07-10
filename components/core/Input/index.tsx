// React Form Hook
import { Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

// Components
import { Text, TextInput, View } from 'react-native';
import ErrorMessage from '@/components/core/ErrorMessage';

// Hooks
import { useTranslation } from 'react-i18next';

// Types
import { ITextInputProps } from '@/components/core/Input/types';

export default function Input<T extends FieldValues>({
  placeholder,
  control,
  name,
  label,
  error,
  iconName,
  ...props
}: ITextInputProps<T>) {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <View>
          <View style={{ position: 'relative', display: 'flex', gap: 8 }}>
            {label && (
              <Text
                style={{
                  paddingHorizontal: 8,
                  fontSize: 14,
                  color: !!error ? 'red' : 'black',
                }}
              >
                {t(label)}
              </Text>
            )}
            <TextInput
              style={{
                height: 56,
                fontSize: 16,
                color: '#79747E',
                justifyContent: 'center',
                textAlignVertical: 'center',
                borderColor: !!error ? 'red' : '#79747E',
                borderWidth: 1,
                padding: 12,
                borderRadius: 6,
              }}
              {...(field as any)}
              onChangeText={field.onChange}
              placeholder={placeholder && t(placeholder)}
              {...props}
            />
            {/*{appendIcon && (*/}
            {/*  <View style={{ position: 'absolute', right: 0, top: 44 }}>*/}
            {/*    {appendIcon}*/}
            {/*  </View>*/}
            {/*)}*/}
          </View>
          <ErrorMessage error={error} />
        </View>
      )}
    />
  );
}
