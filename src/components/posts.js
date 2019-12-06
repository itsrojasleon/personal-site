import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from '../styles/posts';

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map(e => {
        const {
          frontmatter: { path, title, featuredImage },
        } = e.node;
        let featuredImgFluid = featuredImage.childImageSharp.fluid;

        return (
          <Container key={path}>
            <Img fluid={featuredImgFluid} />
            <Link to={path}>{title}</Link>
          </Container>
        );
      })}
    </>
  );
};
export default Posts;
