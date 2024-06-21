import type { Entries } from './types';

export default (form: HTMLFormElement): Entries => {
  const data = new FormData(form);

  return data.entries() as unknown as Entries;
};
