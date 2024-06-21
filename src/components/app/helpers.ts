import { serialize } from '$/helpers/dom/form';
import { link, navigate } from '$/helpers/history';
import { parse } from '$/helpers/json';
import { trim } from '$/helpers/string';

import type { Search } from './types';
import { DEFAULTS, PAGINATION } from './constants';

export const extract = (search: Search) => {
  const key = new Date().getTime().toString();
  const entries = new URLSearchParams(search).entries();
  const data = Object.fromEntries(entries);
  const deep = parse(data.deep) || false;
  const keywords = trim(data.keywords);
  const order = trim(data.order) || DEFAULTS.ORDER;
  const page = parse(data.page) || PAGINATION.FIRST_PAGE;
  const perPage = parse(data.perPage) || DEFAULTS.ITEMS_PER_PAGE;
  const sort = trim(data.sort) || DEFAULTS.SORT;

  return { deep, key, keywords, order, page, perPage, sort };
};

export const paginate = (form: HTMLFormElement, state?: any) => {
  const valid = form.checkValidity();
  const proceed = () => {
    const params = serialize(form);
    const href = link({ $merge: params });

    return navigate(href, state);
  };

  return valid && proceed();
};

export const search = (form: HTMLFormElement, state?: any) => {
  const valid = form.checkValidity();
  const proceed = () => {
    const { deep, ...params } = serialize(form);
    const href = link({
      ...(deep && { deep: { $set: true } }),
      $merge: params,
      $unset: ['page', !deep && 'deep'],
    });

    return navigate(href, state);
  };

  return valid && proceed();
};
