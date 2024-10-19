import type {
  ImagePickerOptions,
  ImagePickerAsset,
} from 'expo-image-picker/build/ImagePicker.types';
import type { IMediaResource } from '@/types';
import type { Path } from 'react-hook-form';

export interface IUploadMediaContainerProps<T> {
  name: Path<T>;
  launchImageProps?: ImagePickerOptions;
}

export interface IUploadMediaProps<T> {
  name: Path<T>;
  launchImageProps?: ImagePickerOptions;
}

export interface IFile extends ImagePickerAsset {}

export interface IAvatarProps<T> extends IUploadMediaProps<T> {
  placeholderName: `${string} ${string}`;
}

export interface IUploadMediaContainerReturn {
  isLoading: boolean;
  pickImage: () => void;
  selectedImages: IFile[];
  combinedCurrentValue: (number | IMediaResource | IFile)[];
}
