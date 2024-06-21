import client from 'axios';

export const create = () => {
  const {
    VITE_LIBRARIES_IO_BASE_URL: baseURL,
    VITE_LIBRARIES_IO_TIMEOUT: timeout,
  } = import.meta.env;
  const instance = client.create({ baseURL, timeout });

  instance.interceptors.request.use(retrieve);
  instance.interceptors.response.use(recieve);

  return instance;
};

export const authenticate = () => {
  const { VITE_LIBRARIES_IO_API_KEY: apiKey } = import.meta.env;

  return { api_key: apiKey };
};

export const overwrite = ({ params = {} }) =>
  Object.assign(params, authenticate());

export const pick = ({ data }) => data;

export const recieve = (response) => {
  const {
    config: { recieve: handle = pick },
  } = response;

  return handle(response);
};

export const retrieve = (payload) => {
  const params = overwrite(payload);

  return Object.assign(payload, { params });
};

export default create();
