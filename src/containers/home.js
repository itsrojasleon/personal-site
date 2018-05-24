import React, { Component } from 'react';

class Home extends Component {
  render() {
    const style = {
      width: '88%',
      margin: 'auto'
    };
    return (
      <div style={style}>
        <h1 className="title">Luis Rojas</h1>
        <div>
          <p className="description">
            I'm React / Frontend developer.
            Please visit my <a className="github" href="https://github.com/rojasleon">Github</a> to see my work.
            I love teaching and learning; so if I can help you in something don't hesitate to <a className="email" href="mailto:luisrojasleon5@gmail.com">contact me</a>.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;