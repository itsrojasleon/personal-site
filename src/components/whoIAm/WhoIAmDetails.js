import React from 'react';
import {
  Container,
  Description
} from '../styled-components/whoIAm/who-i-am-details';

function WhoIAmDetails() {
  return (
    <Container>
      <Description>My name's Juan Luis Rojas León and I'm Mexican.</Description>
      <Description>
        When I was 15 years old I discovered this incredible world of
        programming, after that I knew what my life purpose was going to be.
      </Description>
      <Description>
        I love using technologies like React (especially with Hooks), Redux,
        Node and React Native in my projects (Yes! I love Javascript); but I
        also have some experience with languages like Dart and Typescript.
      </Description>
    </Container>
  );
}
export default WhoIAmDetails;
