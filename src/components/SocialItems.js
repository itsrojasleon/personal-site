import React from 'react';
import { SocialMedia } from '../styles/footer';

function SocialItems() {
  const socialMedia = [
    {
      id: 'github',
      url: 'https://github.com/rojasleon',
      icon: 'fab fa-github'
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/rojas_leon_',
      icon: 'fab fa-twitter'
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/rojasleon',
      icon: 'fab fa-linkedin-in'
    }
  ];
  return (
    <>
      {socialMedia.map(social => (
        <SocialMedia
          target="_blank"
          rel="noopener noreferrer"
          href={`${social.url}`}>
          <i className={`${social.icon}`} />
        </SocialMedia>
      ))}
    </>
  );
}
export default SocialItems;
