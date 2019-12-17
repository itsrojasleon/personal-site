import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/projects';

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
              website
              github
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
        <Projects projects={edges} />
      </div>
    </Layout>
  );
};
export default Portfolio;
