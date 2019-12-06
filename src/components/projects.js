import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../styles/projects';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';

const Projects = ({ projects }) => {
  return (
    <Container>
      {projects.map(e => {
        const {
          frontmatter: { path, title, image, github, website },
        } = e.node;
        return (
          <div key={path}>
            <Link to={path}>
              <h4>{title}</h4>
              <img src={image} alt={title} />
            </Link>
            <div>
              <a target="_blank" rel="noopener noreferrer" href={github}>
                <FaGithub />
              </a>
              <a target="_blank" rel="noopener noreferrer" href={website}>
                <FaGlobeAmericas />
              </a>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
export default Projects;
