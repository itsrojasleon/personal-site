import React, { Suspense, lazy } from 'react';
import Spinner from '../Spinner';
import { Container, Wrapper } from '../styled-components/projects/projects';
// import { getClients, getClient } from ../../utils/api;
import { getProjects } from '../../utils/api';

import useFetchResource from '../../hooks/useFetchResource';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

function Projects() {
  const { data, isLoading, isError } = useFetchResource(getProjects);
  return (
    <Container>
      <Wrapper>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Suspense fallback={<Spinner />}>
            {data.map((project, i) => (
              <ProjectDetails key={project.name} {...project} i={i} />
            ))}
          </Suspense>
        )}
        {isError && <div>Something went wrong</div>}
      </Wrapper>
    </Container>
  );
}
export default Projects;
