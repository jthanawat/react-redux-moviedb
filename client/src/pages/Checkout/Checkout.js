import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { OrderSummary } from '../../components/index';
import { Container, Button } from '../../globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteOrder,
  fetchOrders,
  deleteAllOrder,
  addOrderConfirm,
  fetchOrderConfirm,
} from '../../actions/ordersAction';
import { addTimer } from '../../actions/timerAction';
import {
  OrderSummaryContainer,
  OrderSummaryGrid,
  OrderSummaryWrapper,
  Divider,
  ItemsTotalWrapper,
  TotalList,
  OrderEmpty,
  ShoppingLink,
  FormControl,
  SelectBank,
  LabelBank,
  IconWrapper,
  DeleteAllIcon,
} from '../../components/OrderSummary/OrderSummary.elements';
import { NumberFormat } from '../../helpers/index';
import { notify } from '../../App';

const Checkout = () => {
  const [sum, setSum] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [promotion, setPromotion] = useState('');
  const [payment, setPayment] = useState('');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState(60);
  const { orders } = useSelector((state) => state.orders);
  const { orderConfirm } = useSelector((state) => state.orderConfirm);
  const { timer } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const handleSumPrice = async () => {
      const sumPrice =
        orders &&
        orders.length > 0 &&
        orders.reduce((sum, order) => sum + order.price, 0);
      await setSum(sumPrice);
    };

    const handleDiscount = async () => {
      if (orders.length > 3 && orders.length <= 5) {
        await setPromotion('(Buy 4 Get 10% Off)');
        await setDiscount((sum * 10) / 100);
        await setTotal(sum - (sum * 10) / 100);
      } else if (orders.length > 5) {
        await setPromotion('(Buy 5 Get 20% Off)');
        await setDiscount((sum * 20) / 100);
        await setTotal(sum - (sum * 20) / 100);
      } else {
        await setPromotion('');
        await setDiscount(0);
        await setTotal(sum);
      }
    };
    handleSumPrice();
    handleDiscount();
    dispatch(fetchOrderConfirm());

    return () => clearInterval(timer);
  }, [dispatch, orders, sum, discount, total, timerSeconds]);

  console.log('timer: ', timer);

  const countdown = () => {
    timerSeconds > 0 &&
      setInterval(async () => {
        // dispatch(addTimer(timerSeconds - 1));
        setTimerSeconds(timerSeconds - 1);
      }, 1000);
  };

  // console.log('timerSeconds: ', timerSeconds);
  const handleDeleteOrder = async (id) => {
    await dispatch(deleteOrder(id));
    await dispatch(fetchOrders());
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleDeleteAllOrder = async () => {
    const orderList = orders.filter((order) => order.click === true);

    await orderList.forEach((order) => dispatch(deleteAllOrder(order.id)));
    await dispatch(fetchOrders());
  };

  const handleButtonConfirm = async () => {
    const alert = await Swal.fire({
      title: 'Are you sure?',
      text: 'Please transfer money within 1 minutes after confirm',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#8b8070',
      confirmButtonText: 'Confirm',
    });

    if (alert.isConfirmed) {
      if (payment) {
        await Swal.fire({
          title: 'Success!',
          text: 'Your Order has been confirmed.',
          icon: 'success',
          confirmButtonColor: '#000',
        });
        const confirm = {
          orderDetail: orders,
          payment: payment,
        };
        await dispatch(addOrderConfirm(confirm));
        await dispatch(handleDeleteAllOrder);
        await countdown();
        history.push('/');
        await notify(orderConfirm.payment, timerMinutes, timerSeconds);
      } else {
        await Swal.fire({
          title: 'Fail!',
          text: 'Please select payment.',
          icon: 'warning',
          confirmButtonColor: '#8b8070',
        });
      }
    }
  };

  return (
    <>
      <Container>
        <OrderSummaryContainer>
          {orders && orders.length === 0 && (
            <OrderEmpty>
              Your cart is empty
              <ShoppingLink to="/">START SHOPPING</ShoppingLink>{' '}
            </OrderEmpty>
          )}

          {orders && orders.length > 0 && (
            <>
              <IconWrapper onClick={handleDeleteAllOrder}>
                Clear All
                <DeleteAllIcon />
              </IconWrapper>
              <OrderSummaryGrid>
                <OrderSummaryWrapper>OrderSummary</OrderSummaryWrapper>
                <OrderSummaryWrapper>Quantity</OrderSummaryWrapper>
                <OrderSummaryWrapper>Price</OrderSummaryWrapper>
                <OrderSummaryWrapper>Total</OrderSummaryWrapper>
                {orders.map((order) => (
                  <OrderSummary
                    key={order.id}
                    order={order}
                    deleteOrder={handleDeleteOrder}
                  />
                ))}
              </OrderSummaryGrid>
              <Divider />
              <ItemsTotalWrapper>
                <TotalList>Sub Total</TotalList>
                <TotalList>{NumberFormat.format(sum)}</TotalList>
              </ItemsTotalWrapper>
              <ItemsTotalWrapper>
                <TotalList>Discount {promotion}</TotalList>
                <TotalList>{NumberFormat.format(discount)}</TotalList>
              </ItemsTotalWrapper>
              <Divider />
              <ItemsTotalWrapper>
                <TotalList>Total</TotalList>
                <TotalList>{NumberFormat.format(total)}</TotalList>
              </ItemsTotalWrapper>
              <Divider />
              <OrderSummaryWrapper>Payment</OrderSummaryWrapper>
              <ItemsTotalWrapper>
                <TotalList>Mobile Banking</TotalList>
              </ItemsTotalWrapper>
              <FormControl onSubmit={onSubmit}>
                <LabelBank>
                  <SelectBank
                    type="radio"
                    value="Siam Commercial Bank"
                    onChange={handlePayment}
                    checked={payment === 'Siam Commercial Bank'}
                  />
                  Siam Commercial Bank
                </LabelBank>

                <LabelBank>
                  <SelectBank
                    type="radio"
                    value="Kasikorn Bank"
                    onChange={handlePayment}
                    checked={payment === 'Kasikorn Bank'}
                  />
                  Kasikorn Bank
                </LabelBank>

                <LabelBank>
                  <SelectBank
                    type="radio"
                    value="Bangkok Bank"
                    onChange={handlePayment}
                    checked={payment === 'Bangkok Bank'}
                  />
                  Bangkok Bank
                </LabelBank>

                <LabelBank>
                  <SelectBank
                    type="radio"
                    value="Krung Thai Bank"
                    onChange={handlePayment}
                    checked={payment === 'Krung Thai Bank'}
                  />
                  Krung Thai Bank
                </LabelBank>

                <LabelBank>
                  <SelectBank
                    type="radio"
                    value="Bank of Ayudhya"
                    onChange={handlePayment}
                    checked={payment === 'Bank of Ayudhya'}
                  />
                  Bank of Ayudhya
                </LabelBank>

                <Button onClick={handleButtonConfirm}>
                  Pay and Place Order
                </Button>
              </FormControl>
            </>
          )}
        </OrderSummaryContainer>
      </Container>
    </>
  );
};

export default Checkout;
