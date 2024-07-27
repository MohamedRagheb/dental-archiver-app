import { Control, FieldValues, Path } from 'react-hook-form';

interface IControl<T extends FieldValues> extends Control<T> {}

export interface IInputProps<T extends FieldValues> {
  control: IControl<T>;
  name: Path<T>;
  label?: string;
}
