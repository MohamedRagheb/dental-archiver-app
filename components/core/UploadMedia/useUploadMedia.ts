import { useState } from 'react';

// Third Parties
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

// Types
import type { IUploadMediaContainerProps, IFile } from './types';

// Utils
import { $http } from '@/api';

import { Buffer } from 'buffer';

const FormData = global.FormData;
export default function useUploadMedia({
  launchImageProps,
}: IUploadMediaContainerProps) {
  const [selectedImages, setSelectedImages] = useState<IFile[]>([]);

  const genrateUploadMediaFormDate = (pickedData: IFile | IFile[]) => {
    const formData = new FormData();
    if (Array.isArray(pickedData)) {
      const pickedFile = pickedData[0];
      console.log(pickedFile);
      formData.append(`images`, {
        uri: pickedFile.uri,
        name: pickedFile.uri,
        type: pickedFile.type || 'image/jpeg',
      } as any);
    }
    return formData;
  };

  const UploadImage = async (pickedData: IFile | IFile[]) => {
    try {
      const generatedForm = genrateUploadMediaFormDate(pickedData);

      const res = await $http.post({
        url: 'media/upload',
        data: generatedForm,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: (data, headers) => {
          console.log(data);
          return generatedForm;
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      ...launchImageProps,
    });
    if (!result?.canceled) {
      UploadImage(result.assets);
      setSelectedImages(result.assets);
    }
  };
  return { pickImage, selectedImages };
}
