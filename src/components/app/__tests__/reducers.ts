import { describe, it, expect } from 'vitest';

import type { State } from '../types';
import { fetch, initialize, listen } from '../reducers';

describe('fetch', () => {
  it('Lorem ipsum', () => {
    const state: State = { querystring: '', modules: [], total: 0 };
    const update = fetch({
      modules: [
        {
          contributions_count: 524,
          dependent_repos_count: 0,
          dependents_count: 1,
          deprecation_reason: null,
          description: 'A flutter package that contains some files',
          forks: 60244,
          homepage: 'https://github.com/EbookFoundation/free-programming-books',
          keywords: ['books', 'education', 'hacktoberfest', 'list', 'resource'],
          language: null,
          latest_download_url:
            'https://storage.googleapis.com/pub.dartlang.org/packages/fontweightt-0.0.1.tar.gz',
          latest_release_number: '0.0.1',
          latest_release_published_at: '2024-05-09T15:21:04.352Z',
          latest_stable_release_number: '0.0.1',
          latest_stable_release_published_at: '2024-05-09T15:21:04.352Z',
          license_normalized: false,
          licenses: null,
          name: 'fontweightt',
          normalized_licenses: ['CC-BY-4.0'],
          package_manager_url: 'https://pub.dartlang.org/packages/fontweightt',
          platform: 'Pub',
          rank: 14,
          repository_license: 'CC-BY-4.0',
          repository_status: null,
          repository_url:
            'https://github.com/EbookFoundation/free-programming-books',
          stars: 323707,
          status: null,
          versions: [
            {
              number: '0.0.1',
              published_at: '2024-05-09T15:21:04.352Z',
              spdx_expression: null,
              original_license: null,
              researched_at: null,
              repository_sources: ['Pub'],
            },
          ],
        },
      ],
      total: 1,
    });

    expect(update(state)).toEqual({
      modules: [
        {
          contributions_count: 524,
          dependent_repos_count: 0,
          dependents_count: 1,
          deprecation_reason: null,
          description: 'A flutter package that contains some files',
          forks: 60244,
          homepage: 'https://github.com/EbookFoundation/free-programming-books',
          keywords: ['books', 'education', 'hacktoberfest', 'list', 'resource'],
          language: null,
          latest_download_url:
            'https://storage.googleapis.com/pub.dartlang.org/packages/fontweightt-0.0.1.tar.gz',
          latest_release_number: '0.0.1',
          latest_release_published_at: '2024-05-09T15:21:04.352Z',
          latest_stable_release_number: '0.0.1',
          latest_stable_release_published_at: '2024-05-09T15:21:04.352Z',
          license_normalized: false,
          licenses: null,
          name: 'fontweightt',
          normalized_licenses: ['CC-BY-4.0'],
          package_manager_url: 'https://pub.dartlang.org/packages/fontweightt',
          platform: 'Pub',
          rank: 14,
          repository_license: 'CC-BY-4.0',
          repository_status: null,
          repository_url:
            'https://github.com/EbookFoundation/free-programming-books',
          stars: 323707,
          status: null,
          versions: [
            {
              number: '0.0.1',
              published_at: '2024-05-09T15:21:04.352Z',
              spdx_expression: null,
              original_license: null,
              researched_at: null,
              repository_sources: ['Pub'],
            },
          ],
        },
      ],
      querystring: '',
      total: 1,
    });
  });
});

describe('initialize', () => {
  it('Lorem ipsum', () => {
    expect(initialize(window.location)).toEqual({
      modules: [],
      querystring: '',
      total: 0,
    });
  });
});

describe('listen', () => {
  it('Lorem ipsum', () => {
    const location = { search: '?keywords=react' } as Location;
    const state: State = { querystring: '', modules: [], total: 0 };
    const update = listen(location);

    expect(update(state)).toEqual({
      modules: [],
      querystring: '?keywords=react',
      total: 0,
    });
  });
});
