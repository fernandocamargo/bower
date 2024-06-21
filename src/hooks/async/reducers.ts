import update from 'immutability-helper';

import { State } from './types';

export const initialize = (): State => ({ error: null, pending: false });

export const attempt = () => (state: State) =>
  update(state, { pending: { $set: true } });

export const reject = (error: Error) => (state: State) =>
  update(state, {
    error: { $set: error },
    pending: { $set: false },
  });

export const resolve = () => (state: State) =>
  update(state, { $merge: initialize() });
