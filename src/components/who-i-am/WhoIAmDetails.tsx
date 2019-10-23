import React from 'react';
import {
  Container,
  Description,
  Blue
} from '../../styles/whoIAm/who-i-am-details';

const WhoIAmDetails = (): JSX.Element => {
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
        like <Blue>Typescript</Blue>.
      </Description>
      <br />
      <Description>
        One of my favorites hobbies is to study new languages (
        <Blue>English, Russian and Chinese</Blue> "at the moment"), you can see
        my level in two platforms:{' '}
        <Blue>
          <a
            style={{ color: 'rgb(50, 158, 255)' }}
            href="https://www.busuu.com/dashboard#/profile/72980070/progress"
            target="_blank"
            rel="noopener noreferrer"
          >
            Busuu
          </a>
        </Blue>{' '}
        and{' '}
        <Blue>
          <a
            style={{ color: 'rgb(50, 158, 255)' }}
            href="https://www.duolingo.com/profile/rojas_leon"
            target="blank"
            rel="noopener noreferrer"
          >
            Duolingo
          </a>
        </Blue>
        .
      </Description>
    </Container>
  );
};
export default WhoIAmDetails;
