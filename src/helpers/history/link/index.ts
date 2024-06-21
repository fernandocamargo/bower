import update from 'immutability-helper';

import history from '$/history';

export default (commands) => {
  const { pathname, ...url } = window.location;
  const entries = new URLSearchParams(url.search).entries();
  const current = Object.fromEntries(entries);
  const next = update(current, commands);
  const search = new URLSearchParams(Object.entries(next)).toString();

  return history.createHref({ pathname, search });
};
