import type {
  ImagePickerOptions,
  ImagePickerAsset,
} from 'expo-image-picker/build/ImagePicker.types';
import type { IMediaResource } from '@/types';

export interface IUploadMediaContainerProps {
  name: string;
  launchImageProps?: ImagePickerOptions;
}

export interface IUploadMediaProps {
  name: string;
  launchImageProps?: ImagePickerOptions;
}

export interface IFile extends ImagePickerAsset {}

export interface IAvatarProps extends IUploadMediaProps {
  placeholderName: `${string} ${string}`;
}

export interface IUploadMediaContainerReturn {
  isLoading: boolean;
  pickImage: () => void;
  selectedImages: IFile[];
  combinedCurrentValue: (number | IMediaResource | IFile)[];
}
