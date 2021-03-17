import styled from 'styled-components';
import { Container, Button } from '../../globalStyles';

export const InfoSectionContainer = styled(Container)`
  width: 100%;
  position: relative;
`;

export const InfoContent = styled.div`
  width: 100%;
  height: 550px;
  margin: 100px 0;

  @media screen and (max-width: 960px) {
    height: 450px;
    margin: 50px 0;
  }

  ${Button} {
    position: absolute;
    bottom: 50px;
    left: 170px;

    @media screen and (max-width: 960px) {
      bottom: 70px;
      left: 100px;
    }
  }
`;

export const InfoText = styled.div`
  font-size: 7rem;
  font-weight: bold;
  width: 35%;
  text-align: end;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 960px) {
    font-size: 5rem;
    width: 30%;
  }
`;

export const CoverImage = styled.img`
  width: 750px;
  position: absolute;
  top: 0;
  right: 100px;
  z-index: 1;

  @media screen and (max-width: 960px) {
    width: 600px;
    right: 50px;
  }
`;
