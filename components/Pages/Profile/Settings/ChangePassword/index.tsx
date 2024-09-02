// Components
import SettingItem from '@/components/Pages/Profile/Settings/SettingItem';

// Hooks
import { useRef } from 'react';

// types
import type { IModalRef } from '@/components/core/Modal/types';
import ChangePasswordDialog from '@/components/Pages/Profile/Settings/ChangePassword/ChangePasswordDialog';

export default function ChangePassword() {
  const changePasswordDialogRef = useRef<IModalRef>();

  return (
    <>
      <SettingItem
        text={'label.change_password'}
        icon={{ lib: 'FontAwesome', name: 'lock' }}
        onPress={() => changePasswordDialogRef?.current?.openModal()}
      />
      <ChangePasswordDialog ref={changePasswordDialogRef} />
    </>
  );
}
