import { ICourseModel } from '../../CreateCourse/components/interfaces/course-interface';

export const getCourseById = (courses : ICourseModel[], id : string) : ICourseModel => (
  courses.filter((el) => el.id === id)[0]);
