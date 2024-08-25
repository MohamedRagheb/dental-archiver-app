import { useRef } from 'react';
import { IFormRefProps } from '@/components/core/Form/types';
import { IEditProfileForm } from '@/components/Pages/EditProfile/types';

export default function UseEditProfile() {
  const formRef = useRef<IFormRefProps<IEditProfileForm>>();

  const defaultValues: IEditProfileForm = {
    last_name: '',
    first_name: '',
  };

  const handelSubmit = (data: IEditProfileForm) => {
    console.log('submit', data);
  };
  return { formRef, defaultValues, handelSubmit };
}
