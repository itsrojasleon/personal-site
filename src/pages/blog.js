import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { path: { regex: "/blog/" } } }
      ) {
        edges {
          node {
            frontmatter {
              date
              path
              title
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
      <SEO title="Blog" />
      <Posts posts={edges} />
      <Link to="/tags">Search by tags</Link>
    </Layout>
  );
};
export default Blog;
