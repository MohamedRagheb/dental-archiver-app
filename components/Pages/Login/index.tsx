import { TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Input from '@/components/core/Input';

export default function LoginForm() {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
  } = useForm<{ username: string }>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 30 }}>
      <Input
        name={'username'}
        control={control}
        errors={errors['username']!}
        placeholder={'label.username'}
      />
    </View>
  );
}
