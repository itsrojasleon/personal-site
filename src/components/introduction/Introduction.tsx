import React from 'react';
import IntroductionDetails from './IntroductionDetails';
import { Container, Name, Dot } from '../../styles/introduction/introduction';

const Introduction = (): JSX.Element => {
  return (
    <Container>
      <Name>
        Juan Luis Rojas León
        <Dot>.</Dot>
      </Name>
      <IntroductionDetails />
    </Container>
  );
};
export default Introduction;
