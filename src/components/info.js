import React from 'react'

import {
  ContainerInfo,
  Greeting,
  AboutMe
} from '../styles/content'

const Info = () => (
  <ContainerInfo>
    <Greeting>Hi there!</Greeting>
    <AboutMe>
      I'm a Javascript developer and illustrator.
      <br />
      Please visit my <strong><a style={{ textDecoration: 'none', color: '#000' }} href="https://github.com/rojasleon">Github</a></strong> to see my work.
      <br />
      I love teaching and learning; so if I can help you in something do not hesitate to contact me.
    </AboutMe>
  </ContainerInfo>
)
export default Info
