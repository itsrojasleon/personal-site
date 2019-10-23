import React from 'react';
import WhoIAmDetails from './WhoIAmDetails';
import { Container } from '../../styles/whoIAm/who-i-am';

const WhoIam = (): JSX.Element => {
  return (
    <Container>
      <WhoIAmDetails />
    </Container>
  );
};
export default WhoIam;
