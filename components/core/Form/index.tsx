import {
  forwardRef,
  PropsWithChildren,
  ReactChild,
  ReactChildren,
  Ref,
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
      {React.Children.map(children as ReactChild[], (child: ReactChild) =>
        React.isValidElement(child) ? React.cloneElement<any>(child) : child
      )}
    </FormProvider>
  );
}

export default forwardRef(Form) as <T extends AnyObject>(
  props: IProps<T> & { ref?: Ref<any> }
) => React.ReactElement;
