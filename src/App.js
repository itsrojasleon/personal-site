import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import Header from './containers/header';
import Footer from './components/footer';
const Home = lazy(() => import('./containers/home'));
const Portfolio = lazy(() => import('./containers/portfolio'));
const About = lazy(() => import('./containers/about'));

class App extends Component {
  render() {
    return (
      <Router>
        <div className="super-container">
          <LoadingBar />
          <Header />
          <div style={{ marginTop: 100 }}></div>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App
