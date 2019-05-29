import React from 'react';
import {
  Container,
  Description,
  Blue,
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
        I love using technologies like <Blue>React</Blue> (especially with
        Hooks), <Blue>Redux</Blue>,<Blue> Node</Blue> and{' '}
        <Blue>React Native</Blue> in my projects (Yes! I love{' '}
        <Blue>Javascript</Blue>); but I also have some experience with languages
        like <Blue>Dart</Blue> and <Blue>Typescript</Blue>.
      </Description>
    </Container>
  );
}
export default WhoIAmDetails;
