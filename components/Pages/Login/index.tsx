// Components
import { View } from 'react-native';
import Input from '@/components/core/Input';
import Button from '@/components/core/Button';
import PasswordInput from '@/components/core/Input/passwordInput';

// Hooks
import { useTranslation } from 'react-i18next';
import useFormHandler from '@/hooks/useFormHandler';

// Types
import { ILoginForm } from '@/components/Pages/Login/types';

// Store
import { useAuthStore } from '@/stores/AuthStore';

// Router
import { Link, useRouter } from 'expo-router';
import Form from '@/components/core/Form';
import FormButton from '@/components/core/Button/FormButton';

export default function LoginForm() {
  const { login, token } = useAuthStore();

  const router = useRouter();

  const { t } = useTranslation();
  const onSubmit = async (data: ILoginForm) => {
    // try {
    //   await login(data.username, data.password);
    //   router.push('/');
    // } catch (e) {}
  };

  const defaultValues = {
    username: 'modyahmed221@icloud.com',
    password: 'mohamed12345',
  };

  const { control, handleSubmit } = useFormHandler<ILoginForm>({
    defaultValues,
    schemaName: 'loginSchema',
    onSubmit,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        gap: 24,
      }}
    >
      <Form<ILoginForm>
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        schemaName={'loginSchema'}
      >
        <Input
          label={'label.username'}
          name={'username'}
          control={control}
          placeholder={'label.username'}
        />
        <FormButton
          style={{ backgroundColor: '#312EA2', borderRadius: 100 }}
          title={'label.submit'}
        />
      </Form>
      {/*<PasswordInput<ILoginForm>*/}
      {/*  label={'label.password'}*/}
      {/*  name={'password'}*/}
      {/*  control={control}*/}
      {/*  placeholder={'label.password'}*/}
      {/*/>*/}
      {/*<View style={{ gap: 16 }}>*/}
      {/*  <Link*/}
      {/*    style={{ alignSelf: 'center', color: '#312EA2' }}*/}
      {/*    href={'(auth)/signup'}*/}
      {/*  >*/}
      {/*    {t('label.signup')}*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    style={{ alignSelf: 'center', color: '#312EA2' }}*/}
      {/*    href={'(auth)/forget-password'}*/}
      {/*  >*/}
      {/*    {t('label.forget_password')}*/}
      {/*  </Link>*/}
      {/*  <Button*/}
      {/*    style={{ backgroundColor: '#312EA2', borderRadius: 100 }}*/}
      {/*    onPress={submit}*/}
      {/*    title={'label.submit'}*/}
      {/*  />*/}
      {/*</View>*/}
    </View>
  );
}
