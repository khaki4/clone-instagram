import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import users from './modules/users';
import Reactotron from "ReactotronConfig";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewaares = [thunk, routerMiddleware(history)];


if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewaares.push(logger);
}

let store;

if (env === 'development') {
  store = initialState =>
    Reactotron.createStore(reducer, applyMiddleware(...middlewaares));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewaares));
}


const reducer = combineReducers({
  users,
  routing: routerReducer,
});

export { history };

export default store();