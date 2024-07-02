import { TextInput, TextInputProps } from 'react-native';
import { Controller, FieldError } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface IProps extends TextInputProps {
  placeholder?: string;
  name: string;
  control: any;
  errors: FieldError;
}
export default function Input({ placeholder, control, name, ...arg }: IProps) {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      render={(field) => (
        <TextInput
          style={{
            height: 56,
            fontSize: 16,
            color: '#79747E',
            justifyContent: 'center',
            textAlignVertical: 'center',
            borderColor: '#79747E',
            borderWidth: 1,
            padding: 12,
            borderRadius: 6,
          }}
          {...(field as any)}
          placeholder={placeholder && t(placeholder)}
        />
      )}
    />
  );
}
