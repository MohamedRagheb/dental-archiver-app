// Types
import type { IFormRefProps } from '@/components/core/Form/types';
import type { IEditProfileForm } from '@/components/Pages/EditProfile/types';

// Hooks
import { useEffect, useRef } from 'react';

// Api
import { $http } from '@/api';

// Stores
import { useAuthStore } from '@/stores/AuthStore';

// Router
import { router } from 'expo-router';

export default function UseEditProfile() {
  const formRef = useRef<IFormRefProps<IEditProfileForm>>();
  const { userData, getUserData } = useAuthStore();

  const defaultValues: IEditProfileForm = {
    first_name: '',
    last_name: '',
    email: '',
    avatar: null,
  };

  const handelSubmit = async ({
    email,
    avatar,
    ...restBody
  }: IEditProfileForm) => {
    try {
      await $http.post({
        url: 'auth/profile',
        data: { ...restBody, avatarId: (avatar as number[])[0] },
      });
      getUserData();

      setTimeout(() => {
        router.push('/profile');
      }, 500);
    } catch {}
  };

  useEffect(() => {
    if (userData) {
      const { first_name, last_name, email, avatar } = userData;
      formRef?.current?.setValues({
        first_name,
        email,
        last_name,
        ...(!!avatar && { avatar }),
      });
    }
  }, [userData]);

  return { formRef, defaultValues, handelSubmit };
}
