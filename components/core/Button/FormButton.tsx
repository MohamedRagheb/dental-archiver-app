import { IFormButton } from '@/components/core/Button/types';
import { useFormContext } from 'react-hook-form';
import { IFormHandlerReturn } from '@/hooks/useFormHandler';
import CustomButton from '@/components/core/Button/index';
import { ActivityIndicator } from 'react-native';
import { memo } from 'react';
const FormButton = ({ ...props }: IFormButton) => {
  const { submit, loading } = useFormContext() as IFormHandlerReturn<any>;

  return (
    <CustomButton
      icon={loading && <ActivityIndicator />}
      onPress={submit}
      {...props}
    />
  );
};

export default memo(FormButton);
