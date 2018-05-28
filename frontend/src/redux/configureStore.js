import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import users from './modules/users';

const env = process.env.NODE_ENV;

const middlewaares = [thunk];

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewaares.push(logger);
}

const reducer = combineReducers({
  users,
});

const store = initialState => createStore(reducer, applyMiddleware(...middlewaares));

export default store();