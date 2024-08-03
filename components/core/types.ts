import { FieldValues, Path } from 'react-hook-form';

export interface IInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
}
