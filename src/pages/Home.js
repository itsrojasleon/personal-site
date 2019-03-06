import React from 'react';
import Title from '../components/Title';

import {
  HomeContainer,
  Description,
  TextInBold,
  ContainerCurrently,
  SingleLine,
  Currently
} from '../styles/home';

function Home() {
  return (
    <HomeContainer>
      <Title />
      <div>
        <Description>
          I'm Software Developer. Please visit my{' '}
          <TextInBold
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rojasleon">
            Github
          </TextInBold>{' '}
          /{' '}
          <TextInBold
            target="_blank"
            rel="noopener noreferrer"
            href="https://repl.it/@rojasleon">
            Repl
          </TextInBold>{' '}
          or{' '}
          <TextInBold
            target="_blank"
            rel="noopener noreferrer"
            href="https://repl.it/@rojasleon">
            CodeSandbox
          </TextInBold>{' '}
          to see my skills
          <span style={{ color: 'rgb(50, 158, 255)' }}>.</span> I love teaching
          and learning; so if I can help you in something don't hesitate to{' '}
          <TextInBold className="email" href="mailto:rojasleon.dev@gmail.com">
            contact me
          </TextInBold>
          <span style={{ color: 'rgb(50, 158, 255)' }}>.</span>
        </Description>
      </div>
      <ContainerCurrently>
        <SingleLine />
        <Currently>Currently developing open source</Currently>
        <SingleLine />
      </ContainerCurrently>
    </HomeContainer>
  );
}
export default Home;
