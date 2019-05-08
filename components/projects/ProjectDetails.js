import React from 'react';
import {
  Container,
  Picture,
  Img,
  Content
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const { image, name, description, tecnologies } = props;
  return (
    <Container>
      <Picture>
        <Img src={image} alt={name} />
      </Picture>
      <Content>
        <div>{name}</div>
      </Content>
    </Container>
  );
}
export default ProjectDetails;
