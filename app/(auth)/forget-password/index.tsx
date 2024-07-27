// Component
import { SafeAreaView, Text, View } from 'react-native';
import { Stack } from 'expo-router';

// Hooks
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Typography from '@/components/core/Typography';
import ForgetPasswordForm from '@/components/Pages/ForgetPassword';

export default function ForgetPassword() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <View style={{ padding: 24, gap: 24 }}>
          <Typography style={{ alignSelf: 'center' }} variant={'h1'}>
            {t('label.forget_password')}
          </Typography>
          <ForgetPasswordForm />
        </View>
      </SafeAreaView>
    </>
  );
}
