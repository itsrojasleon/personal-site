import React from 'react';
import SocialItems from './SocialItems';
import { FooterContainer, By, Social } from '../styles/footer';

const Footer = () => (
  <FooterContainer>
    <By>© Juan Luis Rojas León - 2019</By>
    <Social>
      <SocialItems />
    </Social>
  </FooterContainer>
);
export default Footer;
