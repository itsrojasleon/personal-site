import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Header from './containers/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ width: '100%', height: '100vh' }}>
          <Header />
          <LoadingBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
