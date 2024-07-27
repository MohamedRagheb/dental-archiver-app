import LoginForm from '@/components/Pages/Login';
import { Stack } from 'expo-router';

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LoginForm />
    </>
  );
}
