import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/home';
import Header from './containers/header';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ width: '100%' }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App
