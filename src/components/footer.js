import React from 'react';
import './index.css';

const Footer = props => (
  <footer className="footer">
    <div>
      <p className="by">© Juan Luis Rojas León - 2019</p>
    </div>
    <div className="social">
      <a
        className="social-media"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rojasleon">
        <i className="fab fa-github" />
      </a>
      <a
        className="social-media"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/rojas_leon_">
        <i className="fab fa-twitter" />
      </a>
      <a
        className="social-media"
        target="_blank"
        rel="noopener noreferrer"
        href="www.linkedin.com/in/rojasleon">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  </footer>
);
export default Footer;
