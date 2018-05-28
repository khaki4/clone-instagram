import { createStore, combineReducers } from 'redux';
import users from './modules/users';

const reducer = combineReducers({
  users,
});

const store = initialState => createStore(reducer);

export default store();