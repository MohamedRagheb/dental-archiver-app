// Components
import { Image } from 'react-native';
import CustomButton from '@/components/core/Button';
import Typography from '@/components/core/Typography';

// Container
import useUploadMedia from './useUploadMedia';

// Types
import type { IUploadMediaProps } from './types';

// Utils
import { Each } from '@/components/core/Each';

export default function UploadMedia({
  launchImageProps,
  name,
}: IUploadMediaProps) {
  const { pickImage, selectedImages } = useUploadMedia({
    launchImageProps,
    name,
  });

  return (
    <>
      <Each
        of={selectedImages}
        render={(item, index) => (
          <Image
            key={index}
            style={{
              height: 80,
              width: 80,
              borderRadius: 60,
              alignSelf: 'center',
            }}
            source={{
              uri: item?.uri,
            }}
          />
        )}
      />
      <CustomButton onPress={() => pickImage()} color='red' title='click_me' />
    </>
  );
}
