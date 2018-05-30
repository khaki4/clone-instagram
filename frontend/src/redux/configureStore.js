import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { i18nState } from 'redux-i18n';
import user from 'redux/modules/user';

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
    createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middlewaares))
    );
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewaares));
}


const reducer = combineReducers({
  user,
  routing: routerReducer,
  i18nState,
});

export { history };

export default store();