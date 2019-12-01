import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <ul>
        {tags.map((tagName, index) => (
          <li key={index}>
            <Link to={`/tags/${tagName}`}>{tagName}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default AllTagsTemplate;
