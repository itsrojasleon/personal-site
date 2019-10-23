import React, { Fragment } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import WhoIAm from '../components/who-i-am/WhoIAm';

const About = (): JSX.Element => {
  useDocumentTitle('About | Rojas León');
  return (
    <Fragment>
      <WhoIAm />
    </Fragment>
  );
};
export default About;
