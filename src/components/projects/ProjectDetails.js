import React from 'react';
// import useImage from '../../hooks/useImage';
import convertString from '../../utils/convertString';

import {
  Container,
  Img,
  Content,
  Name,
  StyledLinkExternal,
  StyledLink,
  Icon
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const imageEl = React.useRef(null);
  const { image, name, url, i } = props;
  return (
    <Container>
      <StyledLink to={`/portfolio/${convertString(name)}`}>
        <Img ref={imageEl} src={image} loading="lazy" alt={name} />
      </StyledLink>
      <Content>
        <StyledLink to={`/portfolio/${convertString(name)}`}>
          <Name>{name}</Name>
        </StyledLink>
        <StyledLinkExternal target="_blank" href={`${url}`}>
          <Icon className="fas fa-external-link-alt" />
        </StyledLinkExternal>
      </Content>
    </Container>
  );
}
export default ProjectDetails;
