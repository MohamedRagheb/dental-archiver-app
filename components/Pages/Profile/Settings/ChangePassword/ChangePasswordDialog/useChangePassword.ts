// Hooks
import { useRef } from 'react';

// Types
import type { IChangePasswordForm } from './types';
import type { IFormRefProps } from '@/components/core/Form/types';
import { $http } from '@/api';

export default function useChangePassword() {
  const formRef = useRef<IFormRefProps<IChangePasswordForm>>();

  const defaultValues: IChangePasswordForm = {
    password: '',
    password_confirm: '',
    old_password: '',
  };

  const handleSubmit = async (data: IChangePasswordForm) => {
    try {
      await $http.post({ url: 'auth/change-password', data });
    } catch {}
  };

  return { formRef, defaultValues, handleSubmit };
}
