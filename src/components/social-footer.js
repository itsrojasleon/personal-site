import React from 'react'

import {
  Container,
  Icons,
  Icon
} from '../styles/social'

const SocialFooter = () => (
  <Container>
    <span>© Copyright 2018</span>
    <Icons>
      <a href="https://github.com/rojasleon" target="_blank"><Icon className="fab fa-github"></Icon></a>
      <a href="https://www.instagram.com/rojas_leon_/" target="_blank"><Icon className="fab fa-instagram"></Icon></a>
      <a href="https://twitter.com/rojas_leon_" target="_blank"><Icon className="fab fa-twitter"></Icon></a>
      <a href="https://www.linkedin.com/in/rojasleon" target="_blank"><Icon className="fab fa-linkedin"></Icon></a>
      <a href="https://www.youtube.com/channel/UCMmSIbY7b5S1ayAiqD8jt_g?view_as=subscriber" target="_blank"><Icon className="fab fa-youtube"></Icon></a>
    </Icons>
  </Container>
)
export default SocialFooter
