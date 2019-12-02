import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Template = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={title} />
      <div>{title}</div>
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
