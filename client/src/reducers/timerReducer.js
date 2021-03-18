import { ADD_TIMER } from '../actions/types';

const initialState = {
  timer: 0,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIMER:
      return action.payload;
    default:
      return state;
  }
};

export default timerReducer;
