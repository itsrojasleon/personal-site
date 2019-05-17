import React from 'react';
import logo from '../../rojas.png';
import {
  Container,
  Nav,
  RightSide,
  A,
  Img
} from '../styled-components/header/header';

function Header() {
  return (
    <Container>
      <Nav>
        <A to="/">
          <Img src={logo} alt="Rojas León" />
        </A>
        <RightSide>
          <A to="/about">About</A>
          <A to="/portfolio">Portfolio</A>
        </RightSide>
      </Nav>
    </Container>
  );
}
export default Header;
