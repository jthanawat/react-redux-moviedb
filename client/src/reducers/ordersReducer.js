import {
  ADD_ORDER,
  DELETE_ORDER,
  FETCH_ORDERS,
  DELETE_ALL_ORDER,
} from '../actions/types';

const initialState = {
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ALL_ORDER:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;
