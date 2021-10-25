import { ICourseModel } from '../../models/course-model';

export const getFilteredCourses = (searchQuery : string,
  courses : ICourseModel[]): ICourseModel[] => {
  if (!searchQuery) {
    return courses;
  }

  const result : ICourseModel[] = courses.slice()
    .filter((val) => val.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return result;
};

export default {};
// page template component that import default components(search buttons footer)
// and as props react node .
// use some sort of Hight order components
// trim first and last space
