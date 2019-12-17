import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const Template = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title, featuredImage },
  } = data.markdownRemark;

  const { next, prev } = pageContext;
  let featuredImgFluid = featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title={title} />
      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
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
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
export default Template;
