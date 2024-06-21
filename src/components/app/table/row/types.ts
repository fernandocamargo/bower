import type { ReactElement } from 'react';

export type Component = (props: Props) => ReactElement;

export interface Props {
  owner: {
    name?: string;
    login: string;
  };
  className?: string;
  name: string;
  stars: number;
}

export default Component;
