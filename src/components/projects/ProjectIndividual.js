import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import { getProject } from '../../utils/api';
import useFetchResource from '../../hooks/useFetchResource';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import {
  Container,
  ImageContainer,
  Img,
  Wrapper,
  Name,
  Go,
  List,
  Element
} from '../styled-components/projects/project-individual';

function ProjectIndividual(props) {
  const idName = props.match.params.name;
  useDocumentTitle(idName);
  const { data, isLoading, isError } = useFetchResource(getProject, idName);

  return (
    <Container>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Fragment>
          <ImageContainer>
            <Img
              key={data.name}
              loading="lazy"
              src={data.image}
              alt={data.name}
            />
          </ImageContainer>
          <Wrapper>
            <Name>{data.name}</Name>
            <Go href={data.url}>Visit website</Go>
          </Wrapper>
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
