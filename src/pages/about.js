import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import WhoAmI from '../rename/who-am-i.mdx';

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <WhoAmI />
    </Layout>
  );
};

export default About;
