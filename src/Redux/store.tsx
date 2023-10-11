import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

// user defined imports
import {loginReducer} from './Reducers/loginReducers';
import {dashboardCountReducer} from './Reducers/dashboardCountReducer';
import {SelectionHeaderReducer} from './Reducers/selectionHeaderReducer';
import {unAttendedReducer} from './Reducers/UnAttendedReducer';
import {filledReducer} from './Reducers/filledReducer';
import {helpReducer} from './Reducers/helpReducer';

const appReducer = combineReducers({
  loginReducer,
  dashboardCountReducer,
  SelectionHeaderReducer,
  unAttendedReducer,
  filledReducer,
  helpReducer,
});

export const store = createStore(appReducer, applyMiddleware(thunk));
