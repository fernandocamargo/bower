export default () =>
  String(import.meta.env.MODE)
    .trim()
    .toLowerCase() === 'test';
