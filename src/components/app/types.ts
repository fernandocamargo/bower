import type { ReactElement } from 'react';

import { SORTING } from './constants';

export type Alias = {
  Pagination: [string, number];
  Sorting: [Sorters, string];
};

export type Aliases = {
  Pagination: Array<Alias['Pagination']>;
  Sorting: Array<Alias['Sorting']>;
};

export type Component = (props: Props) => ReactElement;

export interface Module {}

export type Pagination = {
  [alias in Shortcuts]: { href: string };
} & { total: number };

export interface Props {
  className?: string;
}

export type Search = Location['search'];

export type Shortcuts = 'first' | 'previous' | 'next' | 'last';

export type Sorters = keyof typeof SORTING;

export type Sorting = {
  [alias in Sorters]: string;
};

export interface State {
  modules: Array<Module>;
  querystring: string;
  total: number;
}

export default Component;
