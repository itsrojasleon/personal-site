import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Me from '../components/me';

const About = () => {
  return (
    <Layout isWhite>
      <SEO title="About" />
      <Me />
    </Layout>
  );
};

export default About;
