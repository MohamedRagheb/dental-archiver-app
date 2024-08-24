import { ModalProps, ViewProps } from 'react-native';
import { ITypographyProps } from '@/components/core/Typography/rules';
import { ReactElement } from 'react';

interface IModalSlotsProps {
  header: ViewProps;
  content: ViewProps;
  title: ITypographyProps;
}

interface IModalSlots {
  header?: ReactElement;
}
export interface IModalProps extends ModalProps {
  isCentered?: boolean;
  persistent?: boolean;
  title: string;
  slots?: Partial<IModalSlots>;
  slotProps?: Partial<IModalSlotsProps>;
}

export interface IModalRef {
  openModal: () => void;
  closeModal: () => void;
  isOpen: () => boolean;
}
