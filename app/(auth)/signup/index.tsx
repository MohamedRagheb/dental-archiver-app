import { Stack } from 'expo-router';
import { Text } from 'react-native';
import SignupForm from '@/components/Pages/Signup';

export default function Signup() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SignupForm />
    </>
  );
}
