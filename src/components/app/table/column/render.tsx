import { useMemo } from 'react';

import { Anchor } from '$/components/widgets';

import { check } from './helpers';

export default function Column({ children, className, href, order, title }) {
  const sort = useMemo(() => check(order), [order]);

  return (
    <th aria-sort={sort} className={className}>
      <Anchor href={href} title={title}>
        {children}
      </Anchor>
    </th>
  );
}
