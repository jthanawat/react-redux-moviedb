import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMeteor } from 'react-icons/fa';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  z-index: 100;
  top: 0;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  outline: none;
  border: none;
  letter-spacing: 5px;
`;

export const NavIcon = styled(FaMeteor)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ $click }) => ($click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  position: relative;

  &:hover {
    border-bottom: 2px solid #000;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: table;
    vertical-align: middle;
    text-align: center;
    padding: 2rem;
    color: #fff;

    &:hover {
      color: #8b8070;
      /* #d4ccc3 */
      transition: all 0.3s ease;
    }
  }
`;

export const Orders = styled.div`
  display: ${({ $display }) => ($display ? 'flex' : 'none')};
  justify-content: center;
  background: #8b8070;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: -5px;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
