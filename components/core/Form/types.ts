import { IFormHandlerReturn } from '@/hooks/useFormHandler';
import { FieldValues } from 'react-hook-form';

export interface IFormRefProps<T extends FieldValues>
  extends IFormHandlerReturn<T> {}
