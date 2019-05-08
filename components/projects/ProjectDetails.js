import React from 'react';
import { Img } from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const { image, name, description, tecnologies } = props;
  return (
    <div>
      <div>{name}</div>
      <Img src={image} alt={name} />
    </div>
  );
}
export default ProjectDetails;
