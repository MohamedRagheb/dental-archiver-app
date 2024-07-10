import { Control, FieldError, FieldValues, Path } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { ReactNode } from 'react';

interface IControl<T extends FieldValues> extends Control<T> {}

export interface ITextInputProps<T extends FieldValues> extends TextInputProps {
  error: FieldError | undefined;
  iconName?: string;
  onIconClick?: () => void;
  control: IControl<T>;
  placeholder?: string;
  label?: string;
  name: Path<T>;
}
