import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './footer/Footer';

const Home = lazy(() => import('../screens/Home'));
const About = lazy(() => import('../screens/About'));
const Portfolio = lazy(() => import('../screens/Portfolio'));

const ProjectIndividual = lazy(() =>
  import('../components/projects/ProjectIndividual'),
);

export const App = (): JSX.Element => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Suspense fallback={null}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/:name" component={ProjectIndividual} />
          </Suspense>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};
