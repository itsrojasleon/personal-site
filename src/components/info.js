import React from 'react'

import {
  ContainerInfo,
  Greeting,
  AboutMe,
  A
} from '../styles/content'

const Info = () => (
  <ContainerInfo>
    <Greeting>Hi there!</Greeting>
    <AboutMe>
      I'm a Javascript developer and illustrator.
      <br />
      Please visit my <A href="https://github.com/rojasleon">Github</A> to see my work.
      <br />
      I love teaching and learning; so if I can help you in something don't hesitate to <A rel="noopener noreferrer" href="mailto:luisrojasleon5@gmail.com">contact me</A>.
    </AboutMe>
  </ContainerInfo>
)
export default Info
