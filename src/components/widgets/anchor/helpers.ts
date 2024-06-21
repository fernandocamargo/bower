import { navigate } from '$/helpers/history';

export const intercept = (event) => {
  const {
    target: { href },
  } = event;

  event.preventDefault();

  return navigate(href);
};

export const resolve = (event) => {
  const {
    target: { target },
  } = event;

  return target ? event : intercept(event);
};
