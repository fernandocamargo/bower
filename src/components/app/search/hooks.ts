import { useCallback, useEffect, useRef } from 'react';

export default ({ onSubmit: submit }) => {
  const ref = useRef<HTMLInputElement>(null);
  const timeout = useRef();
  const onInput = useCallback(
    ({ target: { form, ...attributes } }) => {
      const skip = attributes.hasOwnProperty('checked');
      const schedule = () => {
        const current = window.setTimeout(submit, 500, form);

        return Object.assign(timeout, { current });
      };

      window.clearTimeout(timeout.current);

      return skip ? submit(form) : schedule();
    },
    [submit]
  );
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      return submit(event.target);
    },
    [submit]
  );

  useEffect(() => ref.current?.focus(), []);

  useEffect(() => () => window.clearTimeout(timeout.current));

  return { onInput, onSubmit, ref };
};
