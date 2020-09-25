import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {changeNewsReducer} from './changeNewsReducer';

export const rootReducer = combineReducers( {
    loginReducer,
    changeNewsReducer,
});