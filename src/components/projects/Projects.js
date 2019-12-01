import React, { Suspense, lazy } from 'react';
// import Spinner from '../Spinner';
import { Container, Wrapper } from '../../styles/projects/projects';
import { getProjects } from '../../api/portfolio';
import { useFetchResource } from '../../hooks/useFetchResource';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

const Projects = () => {
  const { data, isLoading, isError } = useFetchResource(getProjects);

  return (
    <Container>
      <Wrapper>
        {isLoading && <div>Loading...</div>}
        <Suspense fallback={<div>Loading...</div>}>
          {data.map((project, i) => (
            <ProjectDetails key={project.name} {...project} i={i} />
          ))}
        </Suspense>
        {isError && <div>Something went wrong</div>}
      </Wrapper>
    </Container>
  );
};
export default Projects;
