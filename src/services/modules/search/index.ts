import { LibrariesIO } from '$/clients';
import * as Users from '$/services/users';

import type { Service } from './types';
import { PATTERNS } from './constants';
import { recieve } from './helpers';

export default (function ({
  keywords: q,
  perPage: per_page,
  deep,
  order,
  page,
  sort,
}) {
  const format = (module) => {
    const url = module.repository_url || '';
    const [, login = ''] = url.split(PATTERNS.GITHUB);
    const assign = (owner = { login }) => Object.assign(module, { owner });

    return deep && login ? Users.get({ login }).then(assign) : assign();
  };
  const conciliate = ({ total, ...response }) => {
    const chain = response.modules.map(format);
    const deliver = (modules) => ({ modules, total });

    return deep ? Promise.all(chain).then(deliver) : deliver(chain);
  };

  return LibrariesIO.get('/search', {
    params: { order, page, per_page, q, sort },
    recieve,
  }).then(conciliate);
} as Service);
