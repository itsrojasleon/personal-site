import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../styles/projects';

const Projects = ({ projects }) => {
  return (
    <Container>
      {projects.map(e => {
        const { frontmatter } = e.node;
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              <h4>{frontmatter.title}</h4>
              <img src={frontmatter.image} alt={frontmatter.title} />
            </Link>
          </div>
        );
      })}
    </Container>
  );
};
export default Projects;
