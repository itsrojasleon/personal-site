import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import WhoAmI from '../posts/who-am-i.mdx';

const About = () => (
  <Layout>
    <SEO title="About" />
    <WhoAmI />
  </Layout>
);

export default About;
