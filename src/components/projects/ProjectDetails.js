import React from 'react';
import convertString from '../../utils/convertString';

import {
  Container,
  Img,
  Content,
  Name,
  StyledLinkExternal,
  StyledLink,
  Icon,
} from '../styled-components/projects/project-details';

function ProjectDetails(props) {
  const { image, name, url, repo } = props;
  return (
    <Container>
      <StyledLink to={`/portfolio/${convertString(name)}`}>
        <Img src={image} loading="lazy" alt={name} />
      </StyledLink>
      <Content>
        <StyledLink to={`/portfolio/${convertString(name)}`}>
          <Name>{name}</Name>
        </StyledLink>
        <span>
          <StyledLinkExternal target="_blank" href={`${repo}`}>
            <Icon className="fab fa-github" />
          </StyledLinkExternal>
          <StyledLinkExternal target="_blank" href={`${url}`}>
            <Icon className="fas fa-external-link-alt" />
          </StyledLinkExternal>
        </span>
      </Content>
    </Container>
  );
}
export default ProjectDetails;
