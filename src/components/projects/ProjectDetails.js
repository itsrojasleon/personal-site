import React, { useRef } from 'react';
import useImage from '../../hooks/useImage';
import {
  Container,
  Img,
  Content
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const imageEl = useRef(null);
  const { image, name } = props;
  const height = useImage(imageEl);

  return (
    <Container>
      <Img ref={imageEl} src={image} alt={name} />
      <Content>
        <div>{name}</div>
        <div>{height}</div>
      </Content>
    </Container>
  );
}
export default ProjectDetails;
