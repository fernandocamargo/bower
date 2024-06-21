import type { Listener } from '$/types/history';

import history from '$/history';

export default (listener: Listener) => history.listen(listener);
