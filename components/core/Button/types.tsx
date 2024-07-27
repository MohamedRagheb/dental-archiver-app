import { ButtonProps, ViewProps } from 'react-native';

export interface IProps extends Pick<ViewProps, 'style'>, ButtonProps {
  title: string;
  onPress?: () => void;
}

export interface IFormButton extends Omit<IProps, 'onPress'> {}
