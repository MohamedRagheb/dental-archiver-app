import type { ImagePickerOptions } from 'expo-image-picker/build/ImagePicker.types';

export interface IUploadMediaContainerProps {
  name: string;
  launchImageProps: ImagePickerOptions;
}

export interface IUploadMediaProps {
  name: string;
  launchImageProps: ImagePickerOptions;
}

export interface IFile {}
