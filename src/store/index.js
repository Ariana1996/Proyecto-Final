import { createStore, combineReducers } from 'redux';

import { recipesReducer } from './reducers/index';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export default createStore(rootReducer);
