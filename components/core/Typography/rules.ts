import { TextProps } from 'react-native';

export const Rules = {
  h1: {
    fontWeight: 800,
    fontSize: 32,
  },
  h2: {
    fontWeight: 700,
    fontSize: 28,
  },
  h3: {
    fontWeight: 600,
    fontSize: 24,
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
  },
  h5: {
    fontWeight: 400,
    fontSize: 16,
  },
  h6: {
    fontWeight: 300,
    fontSize: 12,
  },
  subtitle: {
    fontWeight: 400,
    fontSize: 14,
  },
};

export type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle';

export interface ITypographyProps extends TextProps {
  variant?: TVariant;
}
