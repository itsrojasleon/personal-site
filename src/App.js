import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import Home from './containers/home';
import Portfolio from './containers/portfolio';
import About from './containers/about';
import Header from './containers/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="super-container">
          <LoadingBar />
          <Header />
          <div style={{ marginTop: 100 }}></div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Redirect from="/" to="home" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
