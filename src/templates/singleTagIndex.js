import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SingleTagIndex = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;

  return (
    <Layout>
      <SEO title="Tag" />
      <div>
        Posts about <strong>{`${tagName}`}</strong>
      </div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default SingleTagIndex;
