import React from 'react';
import WhoIAmDetails from './WhoIAmDetails';
import {
  Container,
  Title,
  Char,
  Description
} from '../styled-components/whoIAm/who-i-am';

function WhoIam() {
  return (
    <Container>
      <Title>
        Hey there<Char>!</Char>
      </Title>
      <WhoIAmDetails />
    </Container>
  );
}
export default WhoIam;
