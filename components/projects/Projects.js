import React from 'react';
import {
  Container,
  Wrapper,
  Img
} from '../styled-components/projects/projects';

function Projects() {
  const base = {
    url: 'https://github.com/rojasleon/personal-site-statics/blob/master/png/',
    parameter: '?raw=true'
  };
  const projects = [
    {
      image: `${base.url}/search-music-v2.png${base.parameter}`,
      name: 'Search Music v2',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    }
  ];
  return (
    <Container>
      <Wrapper>
        <Img src="" />
      </Wrapper>
    </Container>
  );
}
export default Projects;
