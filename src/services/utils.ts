import { mockedAuthorsList } from '../tempData/mockedData';

export const getFormatedDate = (date : string) : string => date.split('/').join('.');

export const getFormatedDuration = (time : number) : string => {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  const formatedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formatedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${formatedHours}:${formatedMinutes} hours`;
};

// eslint-disable-next-line max-len
export const getAuthorsById = (authorsId : string[]) : string[] => mockedAuthorsList.filter((item) => authorsId.includes(item.id)).map((item) => item.name);

export const getFormatedAuthor = (authorsId : string[]) :string => {
  const authorArr : string[] = getAuthorsById(authorsId);
  return authorArr.join(', ');
};

export const getDateString = () => {
  const curDate = new Date();
  const month = curDate.getMonth();
  const day = curDate.getDate();
  const year = curDate.getFullYear();
  return `${month + 1}/${day}/${year}`;
};

export const getNumDuration = (dur : string) : number => {
  const [hours, minutes] : string[] = dur.split(' ')[0].split(':');
  console.log(dur);
  return (+hours * 60) + +minutes;
};

export default {};
