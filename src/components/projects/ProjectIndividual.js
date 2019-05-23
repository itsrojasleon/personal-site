import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import { getProject } from '../../utils/api';
import useFetchResource from '../../hooks/useFetchResource';
import {
  Container,
  ImagesContainer,
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
          <ImagesContainer>
            {data.images.map((image, i) => (
              <Img key={i} loading="lazy" src={image} alt={i} />
            ))}
          </ImagesContainer>
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
