import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import { SuperContainer } from './styles/app';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));

class App extends Component {
  render() {
    return (
      <Router>
        <SuperContainer>
          <Header />
          <div style={{ marginTop: 100, flex: 1 }} />
          <Suspense fallback={<div>LOADING...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </Suspense>
          <Footer />
        </SuperContainer>
      </Router>
    );
  }
}
export default App;
