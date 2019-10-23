import React from 'react';
import FooterIconDetails from './FooterIconDetails';
import { Container } from '../../styles/footer/footer-icons';

const FooterIcons = (): JSX.Element => {
  const socialMedia = [
    {
      id: 'github',
      url: 'https://github.com/rojasleon',
      icon: 'fab fa-github',
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/rojas_leon_',
      icon: 'fab fa-twitter',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/rojasleon',
      icon: 'fab fa-linkedin-in',
    },
  ];
  return (
    <Container>
      {socialMedia.map(el => (
        <FooterIconDetails key={el.id} {...el} />
      ))}
    </Container>
  );
};
export default FooterIcons;
