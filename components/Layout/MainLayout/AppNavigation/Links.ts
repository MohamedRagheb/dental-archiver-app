import { IIcon } from '@/components/core/Icon';

export interface INavigationItem {
  to: string;
  text: string;
  icon: IIcon;
}

export const navigationLinks: INavigationItem[] = [
  {
    to: '/',
    text: 'home',
    icon: { name: 'home', lib: 'Feather' },
  },
  {
    to: '/profile',
    text: 'profile',
    icon: { name: 'person-outline', lib: 'Ionicons' },
  },
];
