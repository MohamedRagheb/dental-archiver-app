import { IFormButton } from '@/components/core/Button/types';
import { useFormContext } from 'react-hook-form';
import { IFormHandlerReturn } from '@/hooks/useFormHandler';
import CustomButton from '@/components/core/Button/index';
export default function FormButton({ ...props }: IFormButton) {
  const { submit } = useFormContext() as IFormHandlerReturn<any>;

  return <CustomButton {...props} onPress={submit} />;
}
