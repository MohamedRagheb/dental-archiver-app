import { ButtonProps, ViewProps } from 'react-native';
import { ReactNode } from 'react';

export interface IProps extends Pick<ViewProps, 'style'>, ButtonProps {
  title: string;
  onPress?: () => void;
  icon?: ReactNode;
}

export interface IFormButton extends Omit<IProps, 'onPress'> {}
