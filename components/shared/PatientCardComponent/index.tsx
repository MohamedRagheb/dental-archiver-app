// types
import type { IPatient } from '@/components/Pages/Patients/types';
import type { IModalRef } from '@/components/core/Modal/types';

// Components
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import Typography from '@/components/core/Typography';

// Hooks
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import ViewDialog from '@/components/shared/PatientCardComponent/ViewDialog';

export default function PatientCardComponent({
  patient,
}: {
  patient: IPatient;
}) {
  const { t } = useTranslation();
  const showPatientModalRef = useRef<IModalRef>();

  return (
    <>
      <ViewDialog patient={patient} ref={showPatientModalRef} />
      <TouchableWithoutFeedback
        onPress={() => showPatientModalRef?.current?.openModal()}
      >
        <View
          style={{
            paddingBottom: 16,
            flexDirection: 'column',
            gap: 8,
            borderWidth: 2,
            borderColor: '#E4E0E1',
            borderRadius: 15,
            shadowColor: '#E4E0E1',
            shadowOffset: { width: 5, height: 10 },
            shadowOpacity: 1,
            shadowRadius: 42,
            elevation: 10,
            minWidth: '100%',
          }}
        >
          <Image
            source={{ uri: patient?.media[0].url }}
            style={{
              height: 170,
              width: '100%',
              borderRadius: 15,
            }}
          />
          <View style={{ paddingHorizontal: 16, gap: 4 }}>
            <Typography variant='h5'>
              {`${patient?.first_name} ${patient?.last_name}`}
            </Typography>
            <Typography variant='subtitle' style={{ color: 'gray' }}>
              {t('label.patient_age', { age: patient?.age })}
            </Typography>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
