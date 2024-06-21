export const recieve = ({ data: modules, headers }) => {
  const total = Number(headers.total);

  return { modules, total };
};
