import React from 'react';
import {
  OrderItem,
  OrderImg,
  OrderDetail,
  OrderList,
  OrderTotal,
  DeleteIcons,
} from './OrderSummary.elements';
import noPoster from '../../images/image2.jpg';
import { NumberFormat } from '../../helpers/index';

const OrderSummary = ({ order, deleteOrder }) => {
  return (
    <>
      <OrderItem>
        <OrderImg
          src={
            order.poster_path === null
              ? noPoster
              : `${process.env.REACT_APP_DOMAIN + order.poster_path}`
          }
        />
        <OrderDetail>{order.title}</OrderDetail>
      </OrderItem>
      <OrderList>
        1 <DeleteIcons onClick={() => deleteOrder(order.id)} />{' '}
      </OrderList>
      <OrderList>{NumberFormat.format(order.price)}</OrderList>
      <OrderTotal>{NumberFormat.format(order.price)}</OrderTotal>
    </>
  );
};

export default OrderSummary;
