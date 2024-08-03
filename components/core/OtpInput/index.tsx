import { Text, TextInput, View } from 'react-native';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form';
import { IOtpInput } from '@/components/core/OtpInput/types';
import { Each } from '@/components/core/Each';
import { intBin } from 'yaml/dist/schema/yaml-1.1/int';
import { createRef, useEffect, useRef } from 'react';

export default function OtpInput<T extends FieldValues>({
  name,
  digits = 4,
  onFinish,
  style,
  editable = true,
  ...props
}: IOtpInput<T>) {
  const { setValue } = useFormContext();

  const refs = Array.from({ length: digits }, () => createRef<TextInput>());

  const handelOtpInputChange = (
    text: string,
    field: ControllerRenderProps<FieldValues, Path<T>>,
    index: number
  ) => {
    const newValue = field.value.toString().split('');
    newValue[index] = text[text.length - 1];
    newValue.length = digits;
    setValue(name, newValue.join(''));
    if (text) {
      refs[index + 1]?.current?.focus();
    } else {
      refs[index - 1]?.current?.focus();
    }
    if (index === digits - 1 && text) return onFinish && onFinish();
  };

  useEffect(() => {
    refs[0]?.current?.focus();
  }, []);
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          {refs.map((input, index) => (
            <TextInput
              {...props}
              {...field}
              key={index}
              ref={input}
              editable={editable}
              autoCorrect={false}
              keyboardType={'number-pad'}
              value={field.value.toString()[index]}
              onChangeText={(text) => handelOtpInputChange(text, field, index)}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === 'Backspace') {
                  refs[index - 1]?.current?.focus();
                }
              }}
              style={{
                borderStyle: 'solid',
                backgroundColor: 'transparent',
                borderColor: 'black',
                borderWidth: 1,
                padding: 18,
                borderRadius: 12,
                ...(style as object),
                ...(!editable && {
                  backgroundColor: '#d3d3d3',
                  borderColor: 'transparent',
                }),
              }}
            />
          ))}
        </View>
      )}
    />
  );
}
