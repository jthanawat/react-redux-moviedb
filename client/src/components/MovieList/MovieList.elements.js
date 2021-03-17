import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const MovieListContainer = styled(Container)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 100px 10px;
  margin: 10 auto;
  padding: 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MovieListItem = styled.div`
  width: 100%;
  max-width: auto;
  height: 100%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column nowrap;
  padding: 0 50px;
`;

export const MovieListImg = styled.img`
  width: 100%;
  height: 250px;
  border: ${({ $border }) => ($border ? 'none' : '1px solid #000')};

  @media screen and (max-width: 960px) {
    height: 450px;
  }
`;

export const NoPosterImg = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

export const MovieText = styled.div`
  font-size: 1.2rem;
`;
