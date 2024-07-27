import {
  FieldValues,
  useForm,
  DefaultValues,
  UseFormReturn,
} from 'react-hook-form';
import { AnyObject, ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import getSchema, { ISchemasName } from '@/Schemas';

interface IPropsBase<T extends AnyObject> {
  defaultValues: DefaultValues<T>;
  onSubmit: (data: T) => Promise<void> | void;
}

interface IPropsWithSchema<T extends AnyObject> extends IPropsBase<T> {
  schema: ObjectSchema<T>;
  schemaName?: never;
}

interface IPropsWithSchemaName<T extends AnyObject> extends IPropsBase<T> {
  schema?: never;
  schemaName: ISchemasName;
}

export type TFormHandlerProps<T extends AnyObject> =
  | IPropsWithSchema<T>
  | IPropsWithSchemaName<T>;

export interface IFormHandlerReturn<T extends FieldValues>
  extends UseFormReturn<T> {
  submit: () => void;
}
export default function useFormHandler<T extends FieldValues>({
  defaultValues,
  onSubmit,
  schemaName,
  schema,
}: TFormHandlerProps<T>): IFormHandlerReturn<T> {
  const _schema = schema ? schema : getSchema(schemaName);
  const resolver = yupResolver(_schema);

  const formDetails = useForm<T>({ defaultValues, resolver });
  return {
    ...formDetails,
    // ...formDetails.formState,
    submit: formDetails.handleSubmit(onSubmit),
  };
}
