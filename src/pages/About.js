import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

function About() {
  useDocumentTitle('About me');
  return <div>About component</div>;
}
export default About;
