export const validateStartBeforeEnd = ({ startDate, endDate }) => {
  if (startDate === '' || endDate === '') return true;
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start < end;
};
