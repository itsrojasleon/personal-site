import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { path: { regex: "/portfolio/" } } }
      ) {
        edges {
          node {
            frontmatter {
              date
              path
              title
              image
            }
          }
        }
      }
    }
  `);
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <div>
        {edges.map(e => {
          const { frontmatter } = e.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path ? frontmatter.path : '/hello/mate'}>
                {frontmatter.title}
              </Link>
              <img src={frontmatter.image} alt={frontmatter.title} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default Portfolio;
