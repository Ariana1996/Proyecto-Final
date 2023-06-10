import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { loginReducer, recipesReducer } from './reducers/index';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  login: loginReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
