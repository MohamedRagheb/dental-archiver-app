// Types
import type { IFormRefProps } from '@/components/core/Form/types';
import type { IEditProfileForm } from '@/components/Pages/EditProfile/types';

// Hooks
import { useEffect, useRef } from 'react';
import { useAuthStore } from '@/stores/AuthStore';
import { $http } from '@/api';

export default function UseEditProfile() {
  const formRef = useRef<IFormRefProps<IEditProfileForm>>();
  const { userData, getUserData } = useAuthStore();

  const defaultValues: IEditProfileForm = {
    first_name: '',
    last_name: '',
    email: '',
  };

  const handelSubmit = async ({ email, ...restBody }: IEditProfileForm) => {
    try {
      await $http.post({
        url: 'auth/profile',
        data: restBody,
      });

      getUserData();
    } catch {}
  };

  useEffect(() => {
    if (userData) {
      const { first_name, last_name, email } = userData;
      formRef?.current?.setValues({
        first_name,
        email,
        last_name,
      });
    }
  }, [userData]);

  return { formRef, defaultValues, handelSubmit };
}
