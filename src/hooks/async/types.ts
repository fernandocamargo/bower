export type Async = Promise<any>;

export type Payoff = 'resolve' | 'reject';

export interface State {
  error: null | Error;
  pending: boolean;
}

export interface Thenable {
  (response: Async): Async;
}
