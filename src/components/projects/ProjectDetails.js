import React, { useRef } from 'react';
import useImage from '../../hooks/useImage';
import {
  Container,
  Img,
  Content,
  Url,
  A
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const imageEl = useRef(null);
  const { image, name, url } = props;
  const spans = useImage(imageEl);
  return (
    <Container spans={spans}>
      <Img ref={imageEl} src={image} alt={name} />
      <Content>
        <Url>
          <A>{url}</A>
        </Url>
      </Content>
    </Container>
  );
}
export default ProjectDetails;
