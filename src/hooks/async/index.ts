import { useCallback, useEffect, useRef, useState } from 'react';

import { Validity } from './helpers';
import * as reducers from './reducers';

export default () => {
  const ref = useRef(new AbortController());
  const [state, persist] = useState(reducers.initialize());
  const API = useCallback(() => {}, []);
  const abort = useCallback(() => {
    const { current: controller } = ref;

    return controller.abort();
  }, []);
  const watch = useCallback((promise: Promise<any>) => {
    const {
      current: { signal },
    } = ref;
    const validity = new Validity({ signal });
    const resolve = (response: any) => {
      persist(reducers.resolve());

      return Promise.resolve(response);
    };
    const reject = (response: Error) => {
      persist(reducers.reject(response));

      return Promise.reject(response);
    };

    persist(reducers.attempt());

    return validity.check(promise).then(resolve).catch(reject);
  }, []);

  useEffect(() => abort, [abort]);

  return Object.assign(API, { abort, watch }, state);
};
