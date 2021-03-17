import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #000;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: ${({ $fontBig }) => ($fontBig ? '1.5rem' : '1rem')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: #8b8070;
    transition: all 0.3s ease-in-out;
  }
`;

export const ErrorMessage = styled(Container)`
  display: flex;
  justify-content: center;
  z-index: 1;
  font-size: 1.5rem;
  font-weight: bold;
  /* color: #d4ccc3; */
  color: #8b8070;
`;

export const SpinnerContainer = styled(Container)`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Line = styled.hr`
  color: #8b8070;
  width: 60%;
`;

export default GlobalStyles;
