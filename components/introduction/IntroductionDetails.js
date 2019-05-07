import React from 'react';
import {
  Container,
  Text,
  Social
} from '../styled-components/introduction/introduction-details';

function IntroductionDetails() {
  return (
    <Container>
      <Text>
        <p>I'm a software developer.</p>
        <p>
          Please visit my
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rojasleon">
            Github
          </Social>
          /
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://repl.it/@rojasleon">
            Repl
          </Social>
          /
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.codewars.com/users/rojasleon">
            Codewars
          </Social>{' '}
          or
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://codesandbox.io/u/rojasleon">
            CodeSandbox
          </Social>{' '}
          to see my skills.
        </p>
      </Text>
    </Container>
  );
}
export default IntroductionDetails;
