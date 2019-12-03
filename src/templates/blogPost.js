import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Template = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  const { next, prev } = pageContext;

  return (
    <Layout>
      <SEO title={title} />
      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
export default Template;
