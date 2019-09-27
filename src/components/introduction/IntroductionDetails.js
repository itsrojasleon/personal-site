import React from 'react';
import {
  Container,
  Dash,
  Text,
  Social,
} from '../styled-components/introduction/introduction-details';

function IntroductionDetails() {
  return (
    <Container>
      <Text>
        <p>
          <Dash>-</Dash>Hi, I'm a software developer.
        </p>
        <p>
          Please visit my
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rojasleon"
          >
            Github
          </Social>
          /
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.codewars.com/users/rojasleon"
          >
            Codewars
          </Social>
          /
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hackerrank.com/rojasleon"
          >
            Hacker Rank
          </Social>
          or
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://codesandbox.io/u/rojasleon"
          >
            CodeSandbox
          </Social>
          to see my skills.
        </p>
      </Text>
    </Container>
  );
}
export default IntroductionDetails;
