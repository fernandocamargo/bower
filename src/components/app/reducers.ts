import update from 'immutability-helper';

import type { State } from './types';

export const fetch =
  ({ modules, total }: Pick<State, 'modules' | 'total'>) =>
  (state: State): State =>
    update(state, {
      modules: { $set: modules },
      total: { $set: total },
    });

export const initialize = ({
  search: querystring,
}: Pick<Location, 'search'>): State => ({
  modules: [],
  total: 0,
  querystring,
});

export const listen =
  ({ search: querystring }: Pick<Location, 'search'>) =>
  (state: State): State =>
    update(state, { querystring: { $set: querystring } });
