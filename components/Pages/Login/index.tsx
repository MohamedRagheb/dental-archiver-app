// Components
import { View } from 'react-native';
import Input from '@/components/core/Input';
import Button from '@/components/core/Button';

// Hooks
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

// Types
import { ILoginForm } from '@/components/Pages/Login/types';

// Yup
import { yupResolver } from '@hookform/resolvers/yup';
import { object, ObjectSchema, string } from 'yup';
import PasswordInput from '@/components/core/Input/passwordInput';

export default function LoginForm() {
  const schema: ObjectSchema<ILoginForm> = object({
    username: string().min(5).required(),
    password: string().min(5).required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        gap: 24,
      }}
    >
      <Input<ILoginForm>
        label={'label.username'}
        name={'username'}
        control={control}
        error={errors['username']}
        placeholder={'label.username'}
      />
      <PasswordInput<ILoginForm>
        label={'label.password'}
        name={'password'}
        control={control}
        error={errors['password']}
        placeholder={'label.password'}
      />
      <Button onPress={handleSubmit(onSubmit)} title={'label.submit'} />
    </View>
  );
}
