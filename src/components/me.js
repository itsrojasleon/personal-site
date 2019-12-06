import React from 'react';
import { Container } from '../styles/me';

const Me = () => {
  return (
    <Container>
      <div>
        <p>
          <span>
            <strong>Hello again</strong>
          </span>
          <span role="img" aria-label="hello">
            ✌️
          </span>
        </p>
        <p>
          When I was 15 years old I discovered this incredible world of
          programming, after that I knew what my life purpose was going to be.
        </p>
        <p>
          I love using technologies like <strong>React</strong> (especially with
          Hooks), <strong> React Native</strong>,<strong> Redux</strong> and
          <strong> Node </strong> in my projects (Yes! I love the power of
          <strong> Javascript</strong>); but I also have some experience with
          languages like
          <strong> Typescript</strong> and
          <strong> Python</strong>.
        </p>
        <p>
          One of my favorites hobbies is to study new languages (English and
          French "at the moment"), you can see my level in two platforms: Busuu
          and Duolingo.
        </p>
      </div>
    </Container>
  );
};
export default Me;
