import { SafeAreaView, View } from 'react-native';

// Hooks
import useEditProfile from '@/components/Pages/EditProfile/useEditProfile';
import Form from '@/components/core/Form';
import { IEditProfileForm } from '@/components/Pages/EditProfile/types';
import { EditProfileSchema } from '@/Schemas/authSchemas';
import Input from '@/components/core/Input';

export default function EditProfileForm() {
  const { formRef, defaultValues, handelSubmit } = useEditProfile();
  return (
    <SafeAreaView>
      <Form<IEditProfileForm>
        schemaName='EditProfileSchema'
        defaultValues={defaultValues}
        onSubmit={handelSubmit}
        ref={formRef}
      >
        <View style={{ display: 'flex', flexDirection: 'column', padding: 16 }}>
          <Input<IEditProfileForm>
            name={'first_name'}
            label={'first_name'}
            placeholder={'label.enter_ur_first_name'}
          />
        </View>
      </Form>
    </SafeAreaView>
  );
}
