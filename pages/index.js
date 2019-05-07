import React from 'react';
import Layout from '../components/Layout';
import Introduction from '../components/introduction/Introduction';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

function Home() {
  return (
    <div>
      <Layout title="Juan Luis Rojas León" />
      <Introduction />
    </div>
  );
}
export default Home;
