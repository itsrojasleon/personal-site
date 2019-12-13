import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Template = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title, featuredImage },
  } = data.markdownRemark;
  let featuredImgFluid = featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title={title} />
      <div
        style={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          margin: '15px',
        }}>
        <h1>{title}</h1>
        <Img fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
export default Template;
