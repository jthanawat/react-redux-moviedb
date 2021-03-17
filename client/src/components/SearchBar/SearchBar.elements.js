import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Container } from '../../globalStyles';

export const SearchBarContainer = styled(Container)``;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 50 50px;
  width: 100%;
  height: 100%;
`;

export const SearchBarText = styled.input`
  width: 30%;
  /* height: 20px; */
  padding: 5px 15px;
  font-size: 1.5rem;
`;

export const IconWrapper = styled.button`
  border-radius: 4px;
  border: 5px solid #000;
  background: #000;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SearchBarIcon = styled(FaSearch)`
  font-size: 1.5rem;
  color: #fff;
`;
