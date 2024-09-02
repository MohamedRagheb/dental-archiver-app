import { forwardRef } from 'react';

// Components
import Dialog from '@/components/core/Modal';
import Form from '@/components/core/Form';

// Hooks
import useChangePassword from './useChangePassword';

// Types
import type { IChangePasswordForm } from './types';
import PasswordInput from '@/components/core/Input/passwordInput';
import { View } from 'react-native';
import FormButton from '@/components/core/Button/FormButton';

function ChangePasswordDialog(_: any, ref: any) {
  const { formRef, defaultValues, handleSubmit } = useChangePassword();

  return (
    <Dialog
      onClose={() => formRef?.current?.reset()}
      slotProps={{ modalPaper: { style: { borderRadius: 10 } } }}
      ref={ref}
      title='chnage_password'
      isCentered
    >
      <Form<IChangePasswordForm>
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        ref={formRef}
        schemaName='ChangePasswordSchema'
      >
        <View style={{ display: 'flex', gap: 24 }}>
          <PasswordInput<IChangePasswordForm>
            name='old_password'
            label='password'
            placeholder='label.enter_ur_current_password'
          />
          <PasswordInput<IChangePasswordForm>
            name='password'
            label='new_password'
            placeholder='label.enter_ur_new_password'
          />
          <PasswordInput<IChangePasswordForm>
            name='password_confirm'
            label='new_password_confirm'
            placeholder='label.enter_ur_confirm_new_password'
          />
          <FormButton
            style={{
              backgroundColor: '#312EA2',
              borderRadius: 100,
              marginTop: 8,
            }}
            title={'submit'}
          />
        </View>
      </Form>
    </Dialog>
  );
}

export default forwardRef(ChangePasswordDialog);
