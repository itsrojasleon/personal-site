import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children, isWhite }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        style={{
          backgroundColor: isWhite ? 'white' : 'rgb(240,241,243)',
        }}>
        <div>{children}</div>
      </main>
      <Footer isWhite={isWhite} />
    </div>
  );
};

export default Layout;
