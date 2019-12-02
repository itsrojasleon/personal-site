import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
      <div>
        {edges.map(e => {
          const { frontmatter } = e.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          );
        })}
        <Link to="/tags">Search by tags</Link>
      </div>
    </Layout>
  );
};
export default Blog;
