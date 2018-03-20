import React, { Component } from 'react'

import Header from './containers/header'
import Content from './containers/content'
import Footer from './containers/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App
