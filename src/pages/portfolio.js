import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/projects/Projects';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Projects />
    </Layout>
  );
};
export default Portfolio;
