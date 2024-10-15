import icons, { IIconsLibraries } from './icons';
import { ButtonProps, StyleProp } from 'react-native';

export interface IIcon {
  name: string;
  lib: keyof IIconsLibraries;
  onPress?: () => void;
  style?: StyleProp<any>;
}

export interface IIconButton
  extends IIcon,
    Omit<ButtonProps, 'title' | 'backgroundColor' | 'onPress'> {
  title?: string;
  backgroundColor?: string;
  suppressHighlighting?: boolean;
}

export default function IconButton({ name, lib, ...props }: IIconButton) {
  const IconComponent = icons[lib];
  return (
    <IconComponent.Button
      suppressHighlighting={true}
      name={name}
      {...props}
    ></IconComponent.Button>
  );
}

export function Icon({ name, lib, ...props }: IIcon) {
  const IconComponent = icons[lib];
  return (
    <IconComponent
      {...props}
      name={name}
      style={{ fontSize: 20, alignSelf: 'center', ...props.style }}
    />
  );
}
