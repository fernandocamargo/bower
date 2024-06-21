import type { Async } from './types';

export class Validity {
  signal: AbortSignal;
  stale: boolean;

  constructor({ signal }) {
    this.signal = signal;
    this.stale = false;
  }

  abort = ({ target: signal }) => {
    const { abort } = this;

    signal.removeEventListener('abort', abort);

    this.stale = true;
  };

  destroy = () => this.signal.dispatchEvent(create());

  dismiss = () => new Promise(noop);

  succeed = (response: any) => {
    const { dismiss, stale } = this;

    return !stale ? Promise.resolve(response) : dismiss();
  };

  fail = (response: Error) => {
    const { dismiss, stale } = this;

    return !stale ? Promise.reject(response) : dismiss();
  };

  listen = () => {
    const { abort, signal } = this;

    const listener = signal.addEventListener('abort', abort);

    return Promise.resolve(listener);
  };

  check = (promise: Async) => {
    const { destroy, fail, listen, succeed } = this;
    const delivery = () => promise.then(succeed).catch(fail).finally(destroy);

    return listen().then(delivery);
  };
}

export const create = () =>
  new Event('abort', { bubbles: false, cancelable: false, composed: false });

export const noop = () => {};
