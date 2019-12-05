import React from 'react';
import { Wrapper, LeftSide, Name, Email, A } from '../styles/footer';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Name>Juan Luis Rojas León - 2019</Name>
        <>
          <Email href="mailto:rojasleon.dev@gmail.com">
            rojasleon.dev@gmail.com
          </Email>
        </>
      </LeftSide>
      <div>
        <A
          href="https://github.com/rojasleon"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </A>
        <A
          href="https://twitter.com/rojas_leon_"
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter />
        </A>
        <A
          href="https://www.linkedin.com/in/rojasleon"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedinIn />
        </A>
      </div>
    </Wrapper>
  );
};
export default Footer;
