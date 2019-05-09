import React from 'react';
import {
  Container,
  Img,
  Content
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const { image, name } = props;
  return (
    <Container>
      <Img src={image} alt={name} />
      <Content>
        <div>{name}</div>
      </Content>
    </Container>
  );
}
export default ProjectDetails;
