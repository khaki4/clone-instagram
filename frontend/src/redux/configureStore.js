import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import users from './modules/users';

const middlewaares = [thunk];

const reducer = combineReducers({
  users,
});

const store = initialState => createStore(reducer, applyMiddleware(...middlewaares));

export default store();