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
          I love using technologies like
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/">
              {' '}
              React{' '}
            </a>
          </strong>
          (especially with Hooks),
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.github.io/react-native/">
              {' '}
              React Native
            </a>
          </strong>
          ,
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://redux.js.org/">
              {' '}
              Redux{' '}
            </a>
          </strong>
          and
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nodejs.org/en/">
              {' '}
              Node{' '}
            </a>
          </strong>
          in my projects (Yes! I love the power of
          <strong> Javascript</strong>); but I also have some experience with
          languages like
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/docs/home.html">
              Typescript
            </a>
          </strong>{' '}
          and
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.python.org/">
              {' '}
              Python{' '}
            </a>
          </strong>
          .
        </p>
        <p>
          One of my favorites hobbies is to study new languages (
          <strong>English</strong> and <strong>French</strong> "at the moment"),
          you can see my level in two platforms:{' '}
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.busuu.com/dashboard#/profile/72980070/progress">
              Busuu
            </a>
          </strong>{' '}
          and
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.duolingo.com/profile/rojas_leon">
              {' '}
              Duolingo
            </a>
          </strong>
          .
        </p>
      </div>
    </Container>
  );
};
export default Me;
