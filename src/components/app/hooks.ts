import { useCallback, useEffect, useMemo, useState } from 'react';

import type { Listener } from '$/types/history';
import { compare } from '$/helpers/string';
import { link, listen } from '$/helpers/history';
import * as Modules from '$/services/modules';
import { useAsync } from '$/hooks';

import type { Alias, Aliases, Pagination, Sorting } from './types';
import { ORDERS, PAGINATION, SORTING } from './constants';
import { extract, paginate, search } from './helpers';
import * as reducers from './reducers';

export default () => {
  const [state, persist] = useState(reducers.initialize(window.location));
  const fetching = useAsync();
  const params = useMemo(() => extract(state.querystring), [state.querystring]);
  const pagination = useMemo(() => {
    const total = Math.ceil(state.total / params.perPage);
    const entries = [
      ['first', PAGINATION.FIRST_PAGE],
      ['previous', Math.max(params.page - 1, PAGINATION.FIRST_PAGE)],
      ['next', Math.min(params.page + 1, total)],
      ['last', total],
    ] as Aliases['Pagination'];
    const format = (
      stack: Partial<Pagination>,
      [alias, page]: Alias['Pagination']
    ) => {
      const href = link({ page: { $set: page } });

      return Object.assign(stack, { [alias]: { href } });
    };

    return entries.reduce(format, { total }) as Pagination;
  }, [state.total, params]);
  const sorting = useMemo(() => {
    const { order } = params;
    const entries = Object.entries(SORTING) as Aliases['Sorting'];
    const reject = (value: string) => !compare(value, order);
    const reverse = () => ORDERS.find(reject);
    const format = (
      stack: Partial<Sorting>,
      [alias, sort]: Alias['Sorting']
    ) => {
      const active = compare(sort, params.sort);
      const href = link({
        ...(active && { order: { $apply: reverse } }),
        sort: { $set: sort },
        $unset: ['page', !active && 'order'],
      });

      return Object.assign(stack, {
        [alias]: {
          ...(active && { order }),
          href,
        },
      });
    };

    return entries.reduce(format, {});
  }, [params]);
  const emit: Listener = useCallback(
    ({ location }) => persist(reducers.listen(location)),
    []
  );

  useEffect(() => listen(emit), [emit]);

  useEffect(() => {
    const succeed = (response) => persist(reducers.fetch(response));

    return void fetching.watch(Modules.search(params)).then(succeed);
  }, [fetching, params]);

  return { fetching, paginate, pagination, params, search, sorting, ...state };
};
