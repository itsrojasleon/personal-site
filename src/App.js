import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./containers/Home'));
const Portfolio = lazy(() => import('./containers/Portfolio'));
const About = lazy(() => import('./containers/About'));

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
