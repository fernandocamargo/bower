export const append = (form, [name, value]) => {
  const field = Object.assign(document.createElement('input'), {
    type: 'hidden',
    name,
    value,
  });

  form.appendChild(field);

  return form;
};

export default (fields) => {
  const entries = Object.entries(fields);
  const form = document.createElement('form');

  return entries.reduce(append, form);
};
