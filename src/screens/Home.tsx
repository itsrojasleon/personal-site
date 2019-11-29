import React, { Suspense, lazy } from 'react';
import Introduction from '../components/introduction/Introduction';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = (): JSX.Element => {
  useDocumentTitle('Juan Luis Rojas León');

  return (
    <div>
      <Suspense fallback="Loading...">
        <Introduction />
      </Suspense>
    </div>
  );
};
export default Home;
