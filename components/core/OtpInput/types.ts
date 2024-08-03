import { IInputProps } from '@/components/core/types';
import { FieldValues } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';

export interface IOtpInput<T extends FieldValues>
  extends IInputProps<T>,
    TextInputProps {
  digits?: number;
  onFinish?: () => void;
}
