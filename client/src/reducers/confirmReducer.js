import { ADD_ORDER_CONFIRM, FETCH_ORDER_CONFIRM } from '../actions/types';

const initialState = {
  orderConfirm: [],
  payment: '',
};

const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER_CONFIRM:
      return {
        ...state,
        orderConfirm: action.payload,
      };
    case FETCH_ORDER_CONFIRM:
      return {
        ...state,
        orderConfirm: action.payload,
      };
    default:
      return state;
  }
};

export default confirmReducer;
