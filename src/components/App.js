import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Portfolio = lazy(() => import('../pages/Portfolio'));

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Suspense>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}
export default App;
