// React Form Hook
import { Controller, useFormContext } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

// Components
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import ErrorMessage from '@/components/core/ErrorMessage';

// Hooks
import { useTranslation } from 'react-i18next';

// Types
import { ITextInputProps } from '@/components/core/Input/types';
import IconButton from '@/components/core/Input/Icon';
import { useEffect } from 'react';

export default function Input<T extends FieldValues>({
  placeholder,
  name,
  label,
  icon,
  ...props
}: ITextInputProps<T>) {
  const { style, ...restProps } = props;
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<T>();

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
                  color: !!errors[name] ? 'red' : 'black',
                }}
              >
                {t(label)}
              </Text>
            )}
            <TextInput
              autoCapitalize='none'
              style={{
                height: 56,
                fontSize: 16,
                color: '#79747E',
                justifyContent: 'center',
                textAlignVertical: 'center',
                borderColor: !!errors[name] ? 'red' : '#79747E',
                borderWidth: 1,
                padding: 12,
                borderRadius: 6,
                backgroundColor:
                  props.editable === false ? '#dee2e6' : 'transparent',
                ...(style as object),
              }}
              {...(field as any)}
              onChangeText={(e) => {
                field.onChange(e);
                trigger(name);
              }}
              placeholder={placeholder && t(placeholder)}
              {...restProps}
            />
            {icon && (
              <View
                key={1}
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 36,
                  cursor: 'pointer',
                }}
              >
                <TouchableWithoutFeedback
                  onPress={icon.onPress}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <IconButton
                    backgroundColor={'transparent'}
                    color={'black'}
                    suppressHighlighting={true}
                    {...icon}
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          </View>
          <ErrorMessage<T> error={errors[name]} />
        </View>
      )}
    />
  );
}
