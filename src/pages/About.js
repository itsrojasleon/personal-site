import React, { Fragment } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import WhoIAm from '../components/whoIAm/WhoIAm';

function About() {
  useDocumentTitle('About | Rojas León');
  return (
    <Fragment>
      <WhoIAm />
    </Fragment>
  );
}
export default About;
