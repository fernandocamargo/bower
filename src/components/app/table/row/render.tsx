import { useMemo } from 'react';

import type Component from './types';

export default (function Row({ className, name, stars, ...props }) {
  const owner = useMemo(
    () => props.owner.name || props.owner.login,
    [props.owner]
  );

  return (
    <tr className={className}>
      <td>{name}</td>
      <td>{owner}</td>
      <td>{stars}</td>
    </tr>
  );
} as Component);
