import React from 'react';
import Spinner from '../Spinner';
import { getProject } from '../../utils/api';
import useFetchResource from '../../hooks/useFetchResource';

function ProjectIndividual(props) {
  const idName = props.match.params.name;
  const project = useFetchResource(getProject, idName);
  if (!project) {
    return <Spinner />;
  }
  const { name, image } = project[0];
  return (
    <div>
      <img width="50%" loading="lazy" src={image} />
      <span>{name}</span>
    </div>
  );
}
export default ProjectIndividual;
