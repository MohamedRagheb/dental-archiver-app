import {
  FieldValues,
  useForm,
  DefaultValues,
  UseFormReturn,
  Path,
} from 'react-hook-form';
import { AnyObject, ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import getSchema, { ISchemasName } from '@/Schemas';
import { useEffect, useState } from 'react';
import enviroment from '@/Utils/enviroment';

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
  loading: boolean;
  setValues: (values: Partial<T>) => void;
}
export default function useFormHandler<T extends FieldValues>({
  defaultValues,
  onSubmit,
  schemaName,
  schema,
}: TFormHandlerProps<T>): IFormHandlerReturn<T> {
  const [loading, setLoading] = useState(false);

  const _schema = schema ? schema : getSchema(schemaName);
  const resolver = yupResolver(_schema);

  const formDetails = useForm<T>({ defaultValues, resolver });

  const submit = async () => {
    try {
      setLoading(true);
      return await formDetails.handleSubmit(onSubmit, (errors) => {
        if (enviroment.App_Mode === 'development') console.log(errors);
      })();
    } catch (e) {
      return console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    ...formDetails,
    ...formDetails.formState,
    setValues: (values) => {
      for (const key in values) {
        formDetails.setValue(key as any, values[key]!);
      }
    },
    loading,
    submit,
  };
}
