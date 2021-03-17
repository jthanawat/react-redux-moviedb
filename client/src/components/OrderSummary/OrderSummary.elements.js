import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Line, Button } from '../../globalStyles';
import { FaRegMinusSquare, FaTrashAlt } from 'react-icons/fa';

export const OrderSummaryContainer = styled(Container)`
  width: 100%;
  position: relative;
  min-height: 80vh;
  /* margin-bottom: 100px; */
  margin-top: 100px;
`;

export const OrderSummaryGrid = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(1, 2fr 1fr 1fr 1fr);
`;

export const OrderSummaryWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #000;
  color: #fff;
  font-size: 1.8rem;
  padding: 10px 30px;
  display: flex;
  align-items: center;

  &:nth-child(2) {
    justify-content: center;
  }
  &:nth-child(3) {
    justify-content: center;
  }
  &:nth-child(4) {
    justify-content: flex-end;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 30px;
  margin: 20px 0;
`;

export const OrderImg = styled.img`
  width: 30%;
  border: ${({ $border }) => ($border ? 'none' : '1px solid #000')};

  @media screen and (max-width: 960px) {
    width: 20%;
  }
`;

export const OrderDetail = styled.div`
  font-size: 1.5rem;
  padding: 0 15px;
`;

export const OrderList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  padding: 0 30px;
`;

export const Divider = styled(Line)`
  width: 100%;
`;

export const ItemsTotalWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const TotalList = styled.div`
  padding: 0 30px;
`;

export const DeleteIcons = styled(FaRegMinusSquare)`
  margin: 0 5px;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const OrderEmpty = styled.div`
  height: 75vh;
  margin: 100px 0;
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const ShoppingLink = styled(Link)`
  margin: 0 20px;
`;

export const FormControl = styled.form`
  display: flex;
  flex-flow: column nowrap;

  ${Button} {
    margin: 20px 0;
    width: auto;
    align-self: flex-end;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const LabelBank = styled.label`
  margin: 8px 0;
  font-size: 1.5rem;
`;

export const SelectBank = styled.input`
  margin: 0 5px;
  font-size: 1.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const DeleteAllIcon = styled(FaTrashAlt)`
  margin-left: 10px;
`;
