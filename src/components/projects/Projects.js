import React, { Suspense, lazy } from 'react';
import Spinner from '../Spinner';
import { Container, Wrapper } from '../styled-components/projects/projects';
import projects from '../../utils/api';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

function Projects() {
  return (
    <Container>
      <Wrapper>
        <Suspense fallback={<Spinner />}>
          {projects.map((project, i) => (
            <ProjectDetails key={project.name} {...project} i={i} />
          ))}
        </Suspense>
      </Wrapper>
    </Container>
  );
}
export default Projects;
