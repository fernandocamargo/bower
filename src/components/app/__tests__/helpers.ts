import { describe, it, expect } from 'vitest';

import type { Listener } from '$/types/history';
import { listen } from '$/helpers/history';
import { mock } from '$/helpers/dom/form';
import history from '$/history';

import { DEFAULTS, PAGINATION } from '../constants';
import { extract, paginate, search } from '../helpers';

describe('extract', () => {
  it('Should accurately extract and parse parameters from the given URL query string', () => {
    const params = extract(
      '?deep=true&keywords=react&order=desc&page=2&perPage=10&sort=name'
    );

    expect(params).toEqual({
      deep: true,
      key: expect.any(String),
      keywords: 'react',
      order: 'desc',
      page: 2,
      perPage: 10,
      sort: 'name',
    });
  });

  it('Should apply default values to missing parameters in the URL query string', () => {
    const params = extract('?keywords=react');

    expect(params).toEqual({
      deep: false,
      key: expect.any(String),
      keywords: 'react',
      order: DEFAULTS.ORDER,
      page: PAGINATION.FIRST_PAGE,
      perPage: DEFAULTS.ITEMS_PER_PAGE,
      sort: DEFAULTS.SORT,
    });
  });
});

describe('paginate', () => {
  it('Should correctly update the URL query string with form values and ensure these values are persisted', () => {
    const uuid = new Date().getTime();
    const form = mock({ page: '2', perPage: '50' });
    const listener: Listener = ({ location: { search, state }, action }) => {
      const params = new URLSearchParams(search);

      expect(action).toBe('PUSH');
      expect(state.uuid).toBe(uuid);
      expect(params.has('page', '2')).toBe(true);
      expect(params.has('perPage', '50')).toBe(true);

      return unlisten();
    };
    const unlisten = listen(listener);

    paginate(form, { uuid });
  });

  it('Should retain existing query string parameters when they are not specified in the form values', () => {
    const {
      location: { search },
    } = history;
    const uuid = new Date().getTime();
    const perPage = new URLSearchParams(search).get('perPage')?.toString();
    const form = mock({ page: '7' });
    const listener: Listener = ({ location: { search, state }, action }) => {
      const params = new URLSearchParams(search);

      expect(action).toBe('PUSH');
      expect(state.uuid).toBe(uuid);
      expect(params.has('page', '7')).toBe(true);
      expect(params.has('perPage', perPage)).toBe(true);

      return unlisten();
    };
    const unlisten = listen(listener);

    paginate(form, { uuid });
  });
});

describe('search', () => {
  it('Should accurately convert form values into URL query string parameters and update the URL accordingly', () => {
    const uuid = new Date().getTime();
    const form = mock({ keywords: 'react' });
    const listener: Listener = ({ location: { search, state }, action }) => {
      const params = new URLSearchParams(search);

      expect(action).toBe('PUSH');
      expect(state.uuid).toBe(uuid);
      expect(params.has('deep')).toBe(false);
      expect(params.has('keywords', 'react')).toBe(true);
      expect(params.has('page')).toBe(false);

      return unlisten();
    };
    const unlisten = listen(listener);

    search(form, { uuid });
  });

  it('Should preserve existing URL query string parameters when they are not provided in the form values', () => {
    const uuid = new Date().getTime();
    const form = mock({ deep: true, keywords: 'vite' });
    const listener: Listener = ({ location: { search, state }, action }) => {
      const params = new URLSearchParams(search);

      expect(action).toBe('PUSH');
      expect(state.uuid).toBe(uuid);
      expect(params.has('deep', 'true')).toBe(true);
      expect(params.has('keywords', 'vite')).toBe(true);
      expect(params.has('page')).toBe(false);

      return unlisten();
    };
    const unlisten = listen(listener);

    paginate(form, { uuid });
  });
});
