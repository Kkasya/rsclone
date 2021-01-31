import { createStore } from 'redux';
import userProfileReducer from './userProfileReducer'
import initialState from './initialState';

const store = createStore(userProfileReducer, initialState);

export default store;