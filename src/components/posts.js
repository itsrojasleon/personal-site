import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../styles/posts';

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map(e => {
        const { frontmatter } = e.node;

        return (
          <Container key={frontmatter.path}>
            <img loading="lazy" src={frontmatter.image} />
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </Container>
        );
      })}
    </>
  );
};
export default Posts;
