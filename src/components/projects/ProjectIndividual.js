import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import { getProject } from '../../utils/api';
import useFetchResource from '../../hooks/useFetchResource';
import {
  Container,
  Name,
  Ul,
  Li
} from '../styled-components/projects/project-individual';

function ProjectIndividual(props) {
  const idName = props.match.params.name;
  const { data, isLoading, isError } = useFetchResource(getProject, idName);

  return (
    <Container>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Fragment>
          <img width="50%" loading="lazy" src={data.image} alt={data.name} />
          <Name>{data.name}</Name>
          <Ul>
            {data.tecnologies.map((tech, i) => (
              <Li key={i}>{tech}</Li>
            ))}
          </Ul>
        </Fragment>
      )}
      {isError && <div>Something went wrong</div>}
    </Container>
  );
}
export default ProjectIndividual;
