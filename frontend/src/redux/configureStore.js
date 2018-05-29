import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import users from './modules/users';

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewaares = [thunk, routerMiddleware(history)];


if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewaares.push(logger);
}

const reducer = combineReducers({
  users,
  routing: routerReducer,
});

const store = initialState => createStore(reducer, applyMiddleware(...middlewaares));

export { history };

export default store();