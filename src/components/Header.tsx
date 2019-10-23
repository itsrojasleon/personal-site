import React from 'react';
import { Container, Nav, RightSide, A, Img } from '../styles/header/header';

const Header = (): JSX.Element => {
  const logo = 'https://i.imgur.com/FmUZg5p.png';
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
};
export default Header;
