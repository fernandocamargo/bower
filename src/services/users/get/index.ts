import { LibrariesIO } from '$/clients';

export default (payload) => {
  const url = '/github/'.concat(encodeURIComponent(payload.login));
  const fallback = () => payload;

  return LibrariesIO.get(url).catch(fallback);
};
