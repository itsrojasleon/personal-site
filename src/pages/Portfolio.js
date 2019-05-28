import React from 'react';
import Projects from '../components/projects/Projects';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Portfolio() {
  useDocumentTitle('Portfolio | Rojas León');
  return (
    <div>
      <Projects />
    </div>
  );
}
export default Portfolio;
