import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import ordersReducer from './ordersReducer';
import confirmReducer from './confirmReducer';

const reducers = combineReducers({
  movies: moviesReducer,
  orders: ordersReducer,
  orderConfirm: confirmReducer,
});

export default reducers;
