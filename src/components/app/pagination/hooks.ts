import { useCallback } from 'react';

export default ({ onSubmit: submit }) => {
  const onInput = useCallback(({ target: { form } }) => submit(form), [submit]);
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      return submit(event.target);
    },
    [submit]
  );

  return { onInput, onSubmit };
};
