import React, { Suspense, lazy } from 'react';
import Spinner from '../Spinner';
import { Container, Wrapper } from '../../styles/projects/projects';
import { getProjects } from '../../utils/api';

import { useFetchResource } from '../../hooks/useFetchResource';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

const Projects = (): JSX.Element => {
  const { data, isLoading, isError } = useFetchResource(getProjects);
  return (
    <Container>
      <Wrapper>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Suspense fallback={<Spinner />}>
            {data.map((project: any, i: any) => (
              <ProjectDetails key={project.name} {...project} i={i} />
            ))}
          </Suspense>
        )}
        {isError && <div>Something went wrong</div>}
      </Wrapper>
    </Container>
  );
};
export default Projects;
