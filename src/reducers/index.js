import { combineReducers } from 'redux';
import counterReducer from './counter.js';

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;