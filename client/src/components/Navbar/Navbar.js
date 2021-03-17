import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  Orders,
} from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../actions/ordersAction';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);
  const handleCloseMobileMenu = () => setClick(false);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={handleCloseMobileMenu}>
          <NavIcon />
          MOVIX
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu $click={click} onClick={handleClick}>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink to="/category">Category</NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink to="/checkout">Cart</NavLink>
            <Orders $display={orders && orders.length > 0 ? true : false}>
              {orders && orders.length > 0 ? orders.length : null}
            </Orders>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
