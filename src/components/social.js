import React from 'react'

import {
  Banner,
  SocialName
} from '../styles/social'

const Social = ({ hide }) => {
  return (
    <Banner hide={hide}>
      <SocialName rel="noopener noreferrer" href="https://github.com/rojasleon" target="_blank">Github</SocialName>
      <SocialName rel="noopener noreferrer" href="https://www.instagram.com/rojas_leon_/" target="_blank">Instagram</SocialName>
      <SocialName rel="noopener noreferrer" href="https://twitter.com/rojas_leon_" target="_blank">Twitter</SocialName>
      <SocialName rel="noopener noreferrer" href="https://www.linkedin.com/in/rojasleon" target="_blank">Linkedin</SocialName>
      <SocialName rel="noopener noreferrer" href="https://www.youtube.com/channel/UCMmSIbY7b5S1ayAiqD8jt_g?view_as=subscriber" target="_blank">Youtube</SocialName>
    </Banner>
  )
}
export default Social
