import React from 'react';
import FooterIcons from './FooterIcons';
import {
  Container,
  Wrapper,
  LeftSide,
  Name,
  Email
} from '../styled-components/footer/footer';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Name>Juan Luis Rojas León - 2019</Name>
          <>
            <Email href="mailto:rojasleon.dev@gmail.com">
              rojasleon.dev@gmail.com
            </Email>
          </>
        </LeftSide>
        <FooterIcons />
      </Wrapper>
    </Container>
  );
}
export default Footer;
