import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Me from '../components/me';

const About = () => {
  return (
    <Layout isWhite>
      <SEO title="Juan Luis Rojas León" />
      <Me />
    </Layout>
  );
};

export default About;
