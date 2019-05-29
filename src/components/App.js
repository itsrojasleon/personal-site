import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Portfolio = lazy(() => import('../pages/Portfolio'));

const ProjectIndividual = lazy(() =>
  import('../components/projects/ProjectIndividual'),
);

function App() {
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
}
export default App;
