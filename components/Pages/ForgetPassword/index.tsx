// Components
import { View } from 'react-native';
import useFormHandler from '@/hooks/useFormHandler';
import Input from '@/components/core/Input';

interface IForgetPasswordForm {
  email: string;
}

export default function ForgetPasswordForm() {
  const defaultValues = {
    email: '',
  };

  const onSubmit = (data: IForgetPasswordForm) => {
    console.log(data);
  };

  const { control } = useFormHandler<IForgetPasswordForm>({
    onSubmit,
    defaultValues,
    schemaName: 'ForgetPasswordSchema',
  });

  return (
    <View>
      <Input
        control={control}
        name={'email'}
        label={'label.enter_ur_email'}
        placeholder={'label.email'}
      />
    </View>
  );
}
