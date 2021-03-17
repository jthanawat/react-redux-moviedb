import {
  ADD_ORDER,
  DELETE_ORDER,
  FETCH_ORDERS,
  DELETE_ALL_ORDER,
  ADD_ORDER_CONFIRM,
  FETCH_ORDER_CONFIRM,
} from './types';
import axios from 'axios';

export const addOrder = ({
  title,
  poster_path,
  price,
  click,
  movieId,
}) => async (dispatch) => {
  const { data } = await axios.post('http://localhost:5000/orders', {
    title,
    poster_path,
    price,
    click,
    movieId,
  });

  dispatch({
    type: ADD_ORDER,
    payload: data,
  });
};

export const fetchOrders = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:5000/orders');

  dispatch({
    type: FETCH_ORDERS,
    payload: data,
  });
};

export const deleteOrder = (id) => async (dispatch) => {
  const { data } = await axios.delete(`http://localhost:5000/orders/${id}`);

  dispatch({
    type: DELETE_ORDER,
    payload: data,
  });
};

export const deleteAllOrder = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/orders/${id}`);

  dispatch({
    type: DELETE_ALL_ORDER,
    payload: [],
  });
};

export const addOrderConfirm = ({ orderDetail, payment }) => async (
  dispatch
) => {
  const { data } = axios.post('http://localhost:5000/orderConfirm', {
    orderDetail,
    payment,
  });

  dispatch({
    type: ADD_ORDER_CONFIRM,
    payload: data,
  });
};

export const fetchOrderConfirm = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:5000/orderConfirm');

  dispatch({
    type: FETCH_ORDER_CONFIRM,
    payload: data,
  });
};
