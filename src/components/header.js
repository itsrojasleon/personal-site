// import { Link } from 'gatsby';
import React from 'react';
import { Container, Nav, RightSide, A, Img } from '../styles/header';
const logo = 'https://i.imgur.com/FmUZg5p.png';

const Header = ({ siteTitle }) => {
  return (
    <Container>
      <Nav>
        <A to="/">
          <Img src={logo} alt="Rojas León" />
        </A>
        <RightSide>
          <A to="/about">About</A>
          <A to="/portfolio">Portfolio</A>
          <A to="/blog">Blog</A>
        </RightSide>
      </Nav>
    </Container>
  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default Header;
