import history from '$/history';

export default (href: string, state?: any) => {
  const { pathname, search } = new URL(href, window.location.href);

  return history.push({ pathname, search }, state);
};
