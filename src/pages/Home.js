import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../components/Title';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Title />
        <div>
          <p className="description">
            I'm Software Developer. Please visit my{' '}
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/rojasleon">
              Github
            </a>{' '}
            to see my work. I love teaching and learning; so if I can help you
            in something don't hesitate to{' '}
            <a className="email" href="mailto:rojasleon.dev@gmail.com">
              contact me
            </a>
            .
          </p>
        </div>
        <div className="container-currently">
          <span className="single-line" />
          <span className="currently">Currently developing open source</span>
          <span className="single-line" />
        </div>
      </div>
    );
  }
}
export default connect()(Home);
