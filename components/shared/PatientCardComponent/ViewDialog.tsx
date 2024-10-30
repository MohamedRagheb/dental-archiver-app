import React, { forwardRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  VirtualizedList,
} from 'react-native';
import Dialog from '@/components/core/Modal';

// Types
import type { IPatient } from '@/components/Pages/Patients/types';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { IMediaResource } from '@/types';

const ViewDialog = ({ patient }: { patient: IPatient }, ref: any) => {
  return (
    <Dialog
      title=''
      slots={{
        header: <DialogHeader />,
      }}
      slotProps={{
        modalPaper: { style: { height: '90%' } },
      }}
      onClose={() => console.log('Dialog closed')}
      ref={ref}
    >
      <View style={{ flexDirection: 'column', gap: 16 }}>
        <PatientCarousel patientImages={patient?.media} />
        <Text>halklo</Text>
      </View>
    </Dialog>
  );
};

export default forwardRef(ViewDialog);

const DialogHeader = () => {
  return <View style={styles?.header}></View>;
};

const PatientCarousel = ({
  patientImages,
}: {
  patientImages: IMediaResource[];
}) => {
  return (
    <>
      <SwiperFlatList
        data={patientImages}
        paginationActiveColor={'#312EA2'}
        paginationStyle={{ position: 'relative' }}
        renderItem={({ item, index }) => (
          <View style={styles?.carouselItem}>
            <Image
              key={index}
              style={styles?.image}
              source={{ uri: item?.url }}
            />
          </View>
        )}
        showPagination
      />
    </>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    backgroundColor: '#e0e0e0', // Testing background color
  },
  header: {
    backgroundColor: '#B7B7B7',
    alignSelf: 'center',
    width: '50%',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 250,
    height: 7,
  },
  page: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    height: '100%',
    width: width * 0.92,
    borderRadius: 12,
  },
  carouselItem: {
    width,
    height: height * 0.3,
  },
});
