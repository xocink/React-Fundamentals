export const getFormattedDuration = (time : number) : string => {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${formattedHours}:${formattedMinutes} hours`;
};
export default {};
