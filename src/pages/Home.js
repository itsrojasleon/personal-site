import React from 'react';
import Introduction from '../components/introduction/Introduction';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('Juan Luis Rojas León');
  return (
    <div>
      <Introduction />
    </div>
  );
}
export default Home;
