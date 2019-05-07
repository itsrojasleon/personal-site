import React from 'react';
import IntroductionDetails from './IntroductionDetails';
import {
  Container,
  Name,
  Dot
} from '../styled-components/introduction/introduction';

function Introduction() {
  return (
    <Container>
      <Name>
        Juan Luis Rojas León
        <Dot>.</Dot>
      </Name>
      <IntroductionDetails />
    </Container>
  );
}
export default Introduction;
