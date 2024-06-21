import { SORTING } from './constants';

export const check = (value) => SORTING[normalize(value)];

export const normalize = (value = '') => value.trim().toUpperCase();
