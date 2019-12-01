import React from 'react';
import convertString from '../../utils/convertString';
import {
  Container,
  Img,
  Content,
  Name,
  StyledLinkExternal,
  StyledLink,
  // Icon,
} from '../../styles/projects/project-details';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';

const ProjectDetails = props => {
  const { image, name, url, repo } = props;

  return (
    <Container>
      <StyledLink to={`/portfolio/${convertString(name)}`}>
        <Img src={image} alt={name} />
      </StyledLink>
      <Content>
        <StyledLink to={`/portfolio/${convertString(name)}`}>
          <Name>{name}</Name>
        </StyledLink>
        <span>
          <StyledLinkExternal target="_blank" href={`${repo}`}>
            <FaGithub />
          </StyledLinkExternal>
          <StyledLinkExternal target="_blank" href={`${url}`}>
            <FaGlobeAmericas />
          </StyledLinkExternal>
        </span>
      </Content>
    </Container>
  );
};
export default ProjectDetails;
