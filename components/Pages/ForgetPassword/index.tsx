// Components
import { ActivityIndicator, View } from 'react-native';
import Input from '@/components/core/Input';
import Form from '@/components/core/Form';
import { useEffect, useRef, useState } from 'react';
import FormButton from '@/components/core/Button/FormButton';
import { $http } from '@/api';
import { IServerResponse } from '@/types';
import OtpInput from '@/components/core/OtpInput';
import { Icon } from '@/components/core/Input/Icon';
import PasswordInput from '@/components/core/Input/passwordInput';
import { Link, useRouter } from 'expo-router';
import { IFormRefProps } from '@/components/core/Form/types';
import Typography from '@/components/core/Typography';
import { useTranslation } from 'react-i18next';

interface IForgetPasswordForm {
  email: string;
  code: string;
  password: string;
  password_confirm: string;
  step: number;
}

export default function ForgetPasswordForm() {
  const { t } = useTranslation();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const router = useRouter();

  const formRef = useRef<IFormRefProps<IForgetPasswordForm>>();

  const defaultValues = {
    email: '',
    code: '',
    password: '',
    password_confirm: '',
    step: 1,
  };

  const handleStepOneSubmit = async (data: IForgetPasswordForm) => {
    await $http.post<IServerResponse<IServerResponse<never>>>({
      url: 'auth/forget-password',
      data: { email: data.email },
    });
    setStep(2);
  };

  const handleStepTwoSubmit = async () => {
    setStep(3);
  };

  const handleLastStepSubmit = async (data: IForgetPasswordForm) => {
    const { email, step, ...body } = data;
    console.log(body);
    const { statusCode } = await $http.post<IServerResponse<never>>({
      url: 'auth/reset-password',
      data: body,
    });
    if (statusCode === 200) {
      formRef?.current?.reset();

      setTimeout(() => {
        router.push('/login');
        setStep(1);
      }, 500);
    }
  };
  const onSubmit = async (data: IForgetPasswordForm) => {
    const stepsFunctionsArray = [
      handleStepOneSubmit,
      handleStepTwoSubmit,
      handleLastStepSubmit,
    ];
    await stepsFunctionsArray[step - 1](data);
  };

  const btnTitleMap = [
    'label.send_code',
    'label.reset_password',
    'label.submit',
  ];

  useEffect(() => {
    formRef?.current?.setValue('step', step);
  }, [step]);

  return (
    <Form<IForgetPasswordForm>
      schemaName='ForgetPasswordSchema'
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <View style={{ gap: 28 }}>
        <Input<IForgetPasswordForm>
          editable={step === 1}
          name={'email'}
          label={'label.enter_ur_email'}
          placeholder={'label.email'}
        />
        {step > 1 && (
          <OtpInput
            editable={step === 2}
            key={'hi'}
            style={{ width: 50, justifyContent: 'center' }}
            name={'code'}
          />
        )}
        {step > 2 && (
          <>
            <PasswordInput<IForgetPasswordForm>
              name={'password'}
              label={'label.new_password'}
              placeholder={'label.enter_new_password'}
            />
            <PasswordInput<IForgetPasswordForm>
              name={'password_confirm'}
              label={'label.password_confirm'}
              placeholder={'label.enter_password_confirm'}
            />
          </>
        )}
        <Link
          href={'/login'}
          style={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant={'subtitle'}
            style={{ color: '#312EA2', alignSelf: 'center' }}
          >
            {t('label.back_to_login')}
          </Typography>
        </Link>
        <FormButton
          style={{ backgroundColor: '#312EA2', borderRadius: 100 }}
          title={btnTitleMap[step - 1]}
        />
      </View>
    </Form>
  );
}
