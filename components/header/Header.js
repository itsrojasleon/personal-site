import React from 'react';
import Link from 'next/link';
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
        <Link href="/home">
          <A big>
            <Img src="/static/rojas.png" alt="Rojas León" />
          </A>
        </Link>
        <RightSide>
          <Link href="/about">
            <A>About</A>
          </Link>
          <Link href="/portfolio">
            <A>Portfolio</A>
          </Link>
        </RightSide>
      </Nav>
    </Container>
  );
}
export default Header;
