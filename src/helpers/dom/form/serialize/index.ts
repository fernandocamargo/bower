import { cast } from '$/helpers/dom/form';

export default (form: HTMLFormElement) => {
  const data = cast(form);
  const params = new URLSearchParams(data).entries();

  return Object.fromEntries(params);
};
