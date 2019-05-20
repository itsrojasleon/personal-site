import React from 'react';
import Spinner from '../Spinner';
import { getProject } from '../../utils/api';
import useFetchResource from '../../hooks/useFetchResource';
import { Container } from '../styled-components/projects/project-individual';

function ProjectIndividual(props) {
  const idName = props.match.params.name;
  const project = useFetchResource(getProject, idName);
  if (!project) {
    return <Spinner />;
  }
  const { name, image, tecnologies } = project[0];
  console.log(project[0]);
  return (
    <Container>
      <img width="50%" loading="lazy" src={image} alt={name} />
      <span>{name}</span>
      <span>
        {tecnologies.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </span>
    </Container>
  );
}
export default ProjectIndividual;
