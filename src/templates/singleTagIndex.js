import React from 'react';
import { Link } from 'gatsby';

const SingleTagIndex = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;

  return (
    <div>
      <div>Posts about {`${tagName}`}</div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SingleTagIndex;
