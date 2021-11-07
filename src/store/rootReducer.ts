import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { courseReducer } from './courses/reducer';
import { authorReducer } from './authors/reducer';

const reducers = combineReducers({
  user: userReducer,
  courses: courseReducer,
  authors: authorReducer,
});

export default reducers;
