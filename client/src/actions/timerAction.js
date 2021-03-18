import axios from 'axios';
import { ADD_TIMER } from './types';

export const addTimer = (timer) => async (dispatch) => {
  // const { data } = await axios.post('http://localhost:5000/', { timer });
  // console.log('addTimer: ', timer);

  dispatch({
    type: ADD_TIMER,
    payload: timer,
  });
};
