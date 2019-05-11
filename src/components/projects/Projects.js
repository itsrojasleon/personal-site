import React, { Suspense, lazy } from 'react';
import { Container, Wrapper } from '../styled-components/projects/projects';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

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
    },
    {
      image: `${base.url}/search-music-v1.png${base.parameter}`,
      name: 'Search Music v1',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/emaily.png${base.parameter}`,
      name: 'Emaily',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/webpage.png${base.parameter}`,
      name: 'Emaily',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/gifs-and-stickers.png${base.parameter}`,
      name: 'Gifs and stickers',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/search-music-v2.png${base.parameter}`,
      name: 'Search Music v2',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/search-music-v1.png${base.parameter}`,
      name: 'Search Music v1',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/emaily.png${base.parameter}`,
      name: 'Emaily',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/webpage.png${base.parameter}`,
      name: 'Emaily',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/gifs-and-stickers.png${base.parameter}`,
      name: 'Gifs and stickers',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/search-music-v2.png${base.parameter}`,
      name: 'Search Music v2',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/search-music-v1.png${base.parameter}`,
      name: 'Search Music v1',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/emaily.png${base.parameter}`,
      name: 'Emaily',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/webpage.png${base.parameter}`,
      name: 'Emaily',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    },
    {
      image: `${base.url}/gifs-and-stickers.png${base.parameter}`,
      name: 'Gifs and stickers',
      description: '',
      tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux']
    }
  ];
  return (
    <Container>
      <Wrapper>
        <Suspense fallback={<h1>Loading...</h1>}>
          {projects.map(project => (
            <ProjectDetails key={project.name} {...project} />
          ))}
        </Suspense>
      </Wrapper>
    </Container>
  );
}
export default Projects;
