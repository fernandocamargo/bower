import type { ReactElement } from 'react';

export type Component = (props: Props) => ReactElement;

export interface Props {
  className?: string;
}

export default Component;
