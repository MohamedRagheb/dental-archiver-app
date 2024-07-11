import { Control, FieldError, FieldValues, Path } from 'react-hook-form';

interface IControl<T extends FieldValues> extends Control<T> {}

export interface IInputProps<T extends FieldValues> {
  error: FieldError | undefined;
  control: IControl<T>;
  name: Path<T>;
  label?: string;
}
