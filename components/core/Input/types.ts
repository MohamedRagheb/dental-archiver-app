// Types
import { FieldValues } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { IInputProps } from '@/components/core/types';
import { IIcon } from '../Icon';

export interface ITextInputProps<T extends FieldValues>
  extends IInputProps<T>,
    TextInputProps {
  icon?: IIcon;
  placeholder?: string;
}
