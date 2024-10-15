// Hooks
import { useMemo, useState } from 'react';

// Third Parties
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

// Types
import type { IServerResponse } from '@/types';
import type {
  IUploadMediaContainerProps,
  IFile,
  IUploadMediaContainerReturn,
} from './types';

// Http
import { $http } from '@/api';

// Configs
import { Platform } from 'react-native';

// React Hook Form
import { useFormContext } from 'react-hook-form';

export default function useUploadMedia({
  launchImageProps,
  name,
}: IUploadMediaContainerProps): IUploadMediaContainerReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setValue, getValues, watch } = useFormContext();

  const [selectedImages, setSelectedImages] = useState<IFile[]>([]);

  const combinedCurrentValue = useMemo(() => {
    const _Value = getValues(name);
    const _arrayOfValue = Array.isArray(_Value) ? _Value : [_Value];

    const notIdsCurrentFormValue = _arrayOfValue.filter(
      (ele: object | number) => typeof ele !== 'number'
    );
    return [...notIdsCurrentFormValue, ...selectedImages];
  }, [watch(name), selectedImages]);

  const genrateUploadMediaFormDate = (pickedData: IFile[]) => {
    const formData = new FormData();
    if (Array.isArray(pickedData) && !!pickedData.length) {
      pickedData.forEach((file, index) => {
        formData.append(`images[${index}]`, {
          uri:
            Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri,
          name: file.fileName ?? `${Date.now()}.jpg`,
          type: file.mimeType ?? 'image/jpeg',
        } as any);
      });
    }
    return formData;
  };

  const UploadImage = async (pickedData: IFile[]) => {
    try {
      setIsLoading(true);
      const generatedForm = genrateUploadMediaFormDate(pickedData);

      const { data } = await $http.post<IServerResponse<{ ids: number[] }>>({
        url: 'media/upload',
        data: generatedForm,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data?.ids) setValue(name, [...data?.ids]);
    } catch {
    } finally {
      setIsLoading(false);
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
  return { pickImage, selectedImages, combinedCurrentValue, isLoading };
}
