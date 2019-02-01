import React from 'react';
import Title from '../components/Title';

import {
  HomeContainer,
  Description,
  Github,
  Email,
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
          <Github
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rojasleon">
            Github
          </Github>{' '}
          to see my work. I love teaching and learning; so if I can help you in
          something don't hesitate to{' '}
          <Email className="email" href="mailto:rojasleon.dev@gmail.com">
            contact me
          </Email>
          .
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
