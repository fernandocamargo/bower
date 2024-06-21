import type { ReactElement } from 'react';

export type Component = (props: Props) => ReactElement;

export interface Props {
  className?: string;
  children?: ReactElement;
  max: number;
  min: number;
  page: number;
  perPage: number;
}

export default Component;
