import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { courseReducer } from './courses/reducer';

const reducers = combineReducers({
  user: userReducer,
  courses: courseReducer,
});

export default reducers;
