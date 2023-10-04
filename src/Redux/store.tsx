import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const appReducer = combineReducers({

})

export const store = createStore(appReducer,applyMiddleware(thunk));