import React from 'react';
// import useImage from '../../hooks/useImage';
import { Card } from '../styled-components/projects/project-details';
import convertString from '../../utils/convertString';

import {
  Container,
  Img,
  Content,
  StyledLink,
  Url,
  Icon,
  A
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const imageEl = React.useRef(null);
  const { image, name, url, i } = props;
  return (
    <Container>
      <Card>
        <Img ref={imageEl} src={image} loading="lazy" alt={name} />
        <Content>
          <span>{name}</span>
          <span>{url}</span>
        </Content>
      </Card>
      {/* <Content show={show}>
        <StyledLink to={`/portfolio/${convertString(name)}`}>
          Look <Icon eye className="far fa-eye" />
        </StyledLink>
        <Url>
          <Icon className="fas fa-external-link-square-alt" />
          <A target="_blank" href={url}>
            {name}
          </A>
        </Url>
      </Content> */}
    </Container>
  );
}
export default ProjectDetails;
