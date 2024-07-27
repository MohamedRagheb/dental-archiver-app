import icons, { IIconsLibraries } from './icons';
import { ButtonProps } from 'react-native';
import { useState } from 'react';

export interface IIcon {
  name: string;
  lib: keyof IIconsLibraries;
  onPress?: () => void;
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
  return <IconComponent name={name} {...props}></IconComponent>;
}
