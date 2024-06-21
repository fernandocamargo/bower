import { normalize } from './helpers';

export default (previous: string, next: string) =>
  normalize(previous) === normalize(next);
