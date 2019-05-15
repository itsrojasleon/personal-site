import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useImage from '../../hooks/useImage';
import convertString from '../../utils/convertString';
import {
  Container,
  Img,
  Content,
  Url,
  Icon,
  A
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const [show, setShow] = useState(false);
  const imageEl = useRef(null);
  const { image, name, url, i } = props;
  const spans = useImage(imageEl, i);
  return (
    <Container
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      spans={spans}>
      <Img ref={imageEl} src={image} alt={name} />
      <Content show={show}>
        <Link to={`/portfolio/${convertString(name)}`}>
          <i className="far fa-eye" />
        </Link>
        <Url>
          <Icon className="fas fa-external-link-square-alt" />
          <A target="_blank" href={url}>
            {name}
          </A>
        </Url>
      </Content>
    </Container>
  );
}
export default ProjectDetails;
