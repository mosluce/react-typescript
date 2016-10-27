import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './todo';

export default combineReducers({ todos, visibilityFilter });