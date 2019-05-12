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
  const [show, setShow] = React.useState(false);
  const imageEl = useRef(null);
  const { image, name, url } = props;
  const spans = useImage(imageEl);
  return (
    <Container
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      spans={spans}>
      <Img ref={imageEl} src={image} alt={name} />
      {show && (
        <Content>
          <Url>
            <A>{url}</A>
          </Url>
        </Content>
      )}
    </Container>
  );
}
export default ProjectDetails;
