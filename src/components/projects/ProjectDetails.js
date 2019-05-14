import React, { useRef } from 'react';
import useImage from '../../hooks/useImage';
import {
  Container,
  Img,
  Content,
  Url,
  Icon,
  A
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const [show, setShow] = React.useState(false);
  const imageEl = useRef(null);
  const { image, name, url, i } = props;
  const spans = useImage(imageEl, i);
  return (
    <Container
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      spans={spans}>
      <Img ref={imageEl} src={image} alt={name} />
      {show && (
        <Content>
          <Url>
	    <Icon className="fas fa-external-link-square-alt" />
            <A target="_blank" href={`${url}`}>
              {name}
            </A>
          </Url>
        </Content>
      )}
    </Container>
  );
}
export default ProjectDetails;
