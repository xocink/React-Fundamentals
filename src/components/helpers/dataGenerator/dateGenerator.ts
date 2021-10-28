export const getDateString = () : string => {
  const curDate = new Date();
  const month = curDate.getMonth();
  const day = curDate.getDate();
  const year = curDate.getFullYear();
  return `${month + 1}/${day}/${year}`;
};
