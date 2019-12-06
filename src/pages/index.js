import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Juan from '../components/juan';

const IndexPage = () => (
  <Layout isWhite>
    <SEO title="Home" />
    <Juan />
  </Layout>
);

export default IndexPage;
