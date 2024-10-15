// Components
import { SafeAreaView, View } from 'react-native';
import Form from '@/components/core/Form';
import Input from '@/components/core/Input';
import CustomButton from '@/components/core/Button';
import Avatar from '@/components/core/UploadMedia/Avatar';
import FormButton from '@/components/core/Button/FormButton';

// Hooks
import { useRouter } from 'expo-router';

// Container
import useEditProfile from './useEditProfile';

// Types
import type { IEditProfileForm } from '@/components/Pages/EditProfile/types';

export default function EditProfileForm() {
  const { formRef, defaultValues, handelSubmit } = useEditProfile();

  const router = useRouter();
  return (
    <SafeAreaView style={{ height: '100%', display: 'flex' }}>
      <Form<IEditProfileForm>
        schemaName='EditProfileSchema'
        defaultValues={defaultValues}
        onSubmit={handelSubmit}
        ref={formRef}
      >
        <View
          style={{
            display: 'flex',
            gap: 8,
            padding: 16,
          }}
        >
          <Avatar placeholderName='hallo world' name='avatar' />
          <Input<IEditProfileForm>
            name={'email'}
            label={'email'}
            editable={false}
            placeholder={'label.enter_ur_email'}
          />
          <Input<IEditProfileForm>
            name={'first_name'}
            label={'first_name'}
            placeholder={'label.enter_ur_first_name'}
          />
          <Input<IEditProfileForm>
            name={'last_name'}
            label={'last_name'}
            placeholder={'label.enter_ur_last_name'}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormButton
            style={{
              backgroundColor: '#312EA2',
              borderRadius: 100,
              marginTop: 16,
            }}
            title='label.update_profile'
          />
          <CustomButton
            onPress={() => router.push('/profile')}
            color='#312EA2'
            title='label.back_to_profile'
          />
        </View>
      </Form>
    </SafeAreaView>
  );
}
