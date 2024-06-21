export type Keyword = string;

export type Keywords = Array<Keyword>;

export type License = string;

export type Licenses = Array<License>;

export type Source = string;

export type Sources = Array<Source>;

export interface Version {
  number: string;
  published_at: string;
  spdx_expression: null;
  original_license: null;
  researched_at: null;
  repository_sources: Sources;
}

export type Versions = Array<Version>;

export default interface Module {
  contributions_count: number;
  dependent_repos_count: number;
  dependents_count: number;
  deprecation_reason: string | null;
  description: string;
  forks: number;
  homepage: string;
  keywords: Keywords;
  language: null;
  latest_download_url: string;
  latest_release_number: string;
  latest_release_published_at: string;
  latest_stable_release_number: string;
  latest_stable_release_published_at: string;
  license_normalized: boolean;
  licenses: null;
  name: string;
  normalized_licenses: Licenses;
  package_manager_url: string;
  platform: string;
  rank: number;
  repository_license: string;
  repository_status: null;
  repository_url: string;
  stars: number;
  status: null;
  versions: Versions;
}
