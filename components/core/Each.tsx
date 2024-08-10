import { Children, ReactNode } from 'react';

interface IProps<T> {
  of: T[];
  render: (item: T, index: number) => ReactNode;
}

export const Each = <T,>({ of, render }: IProps<T>) => (
  <>{of.map((item, index) => render(item, index))}</>
);
