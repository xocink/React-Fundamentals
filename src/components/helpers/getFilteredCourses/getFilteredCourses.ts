import { ICourseModel } from '../../CreateCourse/components/interfaces/course-interface';

export const getFilteredCourses = (searchQuery: string,
  courses: ICourseModel[]): ICourseModel[] => {
  if (!searchQuery) {
    return courses;
  }
  const result: ICourseModel[] = courses.slice()
    .filter((val) => val.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return result;
};
