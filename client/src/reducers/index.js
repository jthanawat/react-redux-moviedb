import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import ordersReducer from './ordersReducer';
import confirmReducer from './confirmReducer';
import timerReducer from './timerReducer';

const reducers = combineReducers({
  movies: moviesReducer,
  orders: ordersReducer,
  orderConfirm: confirmReducer,
  timer: timerReducer,
});

export default reducers;
