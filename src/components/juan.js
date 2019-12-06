import React from 'react';
import { Container } from '../styles/juan';

const Juan = () => {
  const urls = [
    'https://github.com/rojasleon',
    'https://www.codewars.com/users/rojasleon',
    'https://www.hackerrank.com/rojasleon?hr_r=1',
    'https://codesandbox.io/u/rojasleon',
  ];
  return (
    <Container>
      <div>
        <p>
          Hi there
          <span role="img" aria-label="hi">
            👋
          </span>
        </p>
      </div>
      <span>
        <p>
          My name's <strong>Juan Luis Rojas León</strong> and I am a
          <strong> Frontend Developer</strong>.
        </p>
        <p>
          Please visit my
          <a href={urls[0]}> Github</a> /<a href={urls[1]}> Codewars</a> /
          <a href={urls[2]}> Hackerrank</a> or
          <a href={urls[3]}> CodeSandbox</a> to see what I'm doing right now.
        </p>
      </span>
    </Container>
  );
};
export default Juan;
