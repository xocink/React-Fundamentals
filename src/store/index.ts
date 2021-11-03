import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './rootReducer';
import { IStore } from './interfaces';

import { authorsInitialState } from './authors/initialState';
import { coursesInitialState } from './courses/initialState';
import { userInitialState } from './user/initialState';

const initialStoreState : IStore = {
  user: userInitialState,
  authors: authorsInitialState,
  courses: coursesInitialState,

};

export const store = createStore(reducers, initialStoreState,
  composeWithDevTools(applyMiddleware(thunk)));
// export const store = createStore(reducers, initialStoreState, applyMiddleware(thunk));
