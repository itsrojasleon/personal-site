import React from 'react';
import './index.css';

const Footer = (props) => (
  <footer className="footer">
    <div>
      <p className="by">© Juan Luis Rojas León - 2018</p>
    </div>
    <div className="social">
      <a className="social-media" href="https://github.com/rojasleon"><i className="fab fa-github"></i></a>
      <a className="social-media" href="https://twitter.com/rojas_leon_"><i className="fab fa-twitter"></i></a>
      <a className="social-media" href="www.linkedin.com/in/rojasleon"><i className="fab fa-linkedin-in"></i></a>
    </div>
  </footer>
);
export default Footer;