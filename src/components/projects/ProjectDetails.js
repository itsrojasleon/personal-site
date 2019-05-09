import React, { useRef } from 'react';
import {
  Container,
  Picture,
  Img,
  Content
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const imageEl = useRef(null);
  const { image, name, description, tecnologies } = props;
  return (
    <Container>
      <Img ref={imageEl} src={image} alt={name} />
      <div>Height: {height}</div>
      {/* <Content>
        <div>{name}</div>
      </Content> */}
    </Container>
  );
}
export default ProjectDetails;
