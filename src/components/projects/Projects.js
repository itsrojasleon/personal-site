import React, { Suspense, lazy } from 'react';
import Spinner from '../Spinner';
import { Container, Wrapper } from '../styled-components/projects/projects';
// import { getClients, getClient } from ../../utils/api;
import { getProjects } from '../../utils/api';

import useFetchResource from '../../hooks/useFetchResource';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

function Projects() {
  const projects = useFetchResource(getProjects);
  if (!projects) {
    return <Spinner />;
  }
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
