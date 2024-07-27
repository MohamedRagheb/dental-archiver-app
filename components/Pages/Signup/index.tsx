// Components
import { View } from 'react-native';
import Button from '@/components/core/Button';
import PasswordInput from '@/components/core/Input/passwordInput';
import Input from '@/components/core/Input';

// Hooks
import useFormHandler from '@/hooks/useFormHandler';
import { useTranslation } from 'react-i18next';
import { Link, useRouter } from 'expo-router';

// Types
import { ISignupForm } from '@/components/Pages/Signup/types';

// Api
import { $http } from '@/api';

export default function SignupForm() {
  const router = useRouter();
  const { t } = useTranslation();

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: '',
  };

  const onSubmit = async (data: ISignupForm) => {
    try {
      await $http.post({ url: 'auth/signup', data });
      return router.replace('/login');
    } catch (e) {}
  };

  const { control, submit } = useFormHandler<ISignupForm>({
    defaultValues,
    schemaName: 'SignupSchema',
    onSubmit,
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        gap: 20,
      }}
    >
      <Input<ISignupForm>
        control={control}
        name={'first_name'}
        label={'label.first_name'}
        placeholder={'label.first_name'}
      />
      <Input<ISignupForm>
        control={control}
        name={'last_name'}
        label={'label.last_name'}
        placeholder={'label.last_name'}
      />
      <Input<ISignupForm>
        control={control}
        name={'email'}
        label={'label.email'}
        placeholder={'label.email'}
      />
      <PasswordInput<ISignupForm>
        control={control}
        name={'password'}
        label={'label.password'}
        placeholder={'label.password'}
      />
      <PasswordInput<ISignupForm>
        control={control}
        name={'password_confirm'}
        label={'label.password_confirm'}
        placeholder={'label.password_confirm'}
      />
      <View style={{ gap: 16 }}>
        <Link
          style={{ alignSelf: 'center', color: '#312EA2' }}
          href={'(auth)/login'}
        >
          {t('label.login')}
        </Link>
        <Button
          style={{ backgroundColor: '#312EA2', borderRadius: 100 }}
          onPress={submit}
          title={'label.submit'}
        />
      </View>
    </View>
  );
}
