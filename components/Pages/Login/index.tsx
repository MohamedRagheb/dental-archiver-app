// Components
import { View } from 'react-native';
import Input from '@/components/core/Input';

// Hooks
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

// Types
import { ILoginForm } from '@/components/Pages/Login/types';

export default function LoginForm() {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
  } = useForm<ILoginForm>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 30, gap: 16 }}>
      <Input
        name={'username'}
        control={control}
        errors={errors['username']!}
        placeholder={'label.username'}
      />
      <Input
        secureTextEntry={true}
        name={'password'}
        control={control}
        errors={errors['password']!}
        placeholder={'label.password'}
      />
    </View>
  );
}
