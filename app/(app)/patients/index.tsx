// Components
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import PatientCardComponent from '@/components/shared/PatientCardComponent';

// Types
import type { IServerResponse } from '@/types';
import type { IPatient } from '@/components/Pages/Patients/types';

// Hooks
import { useEffect, useState } from 'react';
import { Link, useNavigation } from 'expo-router';

// Api
import { $http } from '@/api';

// Utils
import { Each } from '@/components/core/Each';

export default function Patients() {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const getMyPatients = async () => {
    try {
      const { data } = await $http.get<IServerResponse<IPatient[]>>({
        url: '/patients/my-patients',
      });
      if (data) setPatients(data);
    } catch {}
  };

  useEffect(() => {
    getMyPatients();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => getMyPatients()} />
      }
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        paddingVertical: 64,
        paddingHorizontal: 16,
        gap: 16,
      }}
    >
      <View style={{ flexDirection: 'column', gap: 8 }}>
        <Each<IPatient>
          of={patients}
          render={(item, index) => (
            <PatientCardComponent key={item?.slug} patient={item} />
          )}
        />
      </View>
    </ScrollView>
  );
}
