import {
  forwardRef,
  PropsWithChildren,
  Ref,
  useEffect,
  useImperativeHandle,
} from 'react';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import useFormHandler, { TFormHandlerProps } from '@/hooks/useFormHandler';
import { AnyObject } from 'yup';

type IProps<T extends AnyObject> = PropsWithChildren<TFormHandlerProps<T>>;

function Form<T extends AnyObject>(
  { children, ...props }: IProps<T>,
  ref: Ref<any>
) {
  const methods = useFormHandler<T>(props);

  useImperativeHandle(ref, () => methods);
  return (
    <FormProvider {...methods}>
      {/*//:TODO*/}
      {/*{React.Children.map(children, (child: ReactChild) =>*/}
      {/*  React.isValidElement(child) ? React.cloneElement<any>(child) : child*/}
      {/*)}*/}
      {children}
    </FormProvider>
  );
}

export default forwardRef(Form) as <T extends AnyObject>(
  props: IProps<T> & { ref?: Ref<any> }
) => React.ReactElement;
