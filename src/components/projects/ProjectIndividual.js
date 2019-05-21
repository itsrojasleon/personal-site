import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import { getProject } from '../../utils/api';
import useFetchResource from '../../hooks/useFetchResource';
import {
  Container,
  Img,
  Name,
  List,
  Element
} from '../styled-components/projects/project-individual';

function ProjectIndividual(props) {
  const idName = props.match.params.name;
  const { data, isLoading, isError } = useFetchResource(getProject, idName);

  return (
    <Container>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Fragment>
          <Img loading="lazy" src={data.image} alt={data.name} />
          <Name>{data.name}</Name>
          <List>
            {data.tecnologies.map((tech, i) => (
              <Element key={i}>{tech}</Element>
            ))}
          </List>
        </Fragment>
      )}
      {isError && <div>Something went wrong</div>}
    </Container>
  );
}
export default ProjectIndividual;
