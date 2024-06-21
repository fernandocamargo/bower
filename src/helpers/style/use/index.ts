import { type Interpolation } from 'styled-components';

import { get } from '$/helpers/object';

export default (path) => {
  const fragments = Array.isArray(path) ? path : path.split('.');
  const resolve = (props) => fragments.reduce(get, props) as Interpolation<any>;

  return resolve;
};
