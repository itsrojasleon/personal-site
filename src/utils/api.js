const base = {
  url: 'https://github.com/rojasleon/personal-site-statics/blob/master/png/',
  parameter: '?raw=true'
};
const projects = [
  {
    image: `${base.url}/search-music-v2.png${base.parameter}`,
    name: 'Search Music v2',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://search-music.herokuapp.com/'
  },
  {
    image: `${base.url}/search-music-v2.png${base.parameter}`,
    name: 'Search Music v2',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://search-music.herokuapp.com/'
  },
  {
    image: `${base.url}/search-music-v2.png${base.parameter}`,
    name: 'Search Music v2',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://search-music.herokuapp.com/'
  },
  {
    image: `${base.url}/search-music-v2.png${base.parameter}`,
    name: 'Search Music v2',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://search-music.herokuapp.com/'
  },
  {
    image: `${base.url}/search-music-v2.png${base.parameter}`,
    name: 'Search Music v2',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://search-music.herokuapp.com/'
  }
];
const handleProjects = () => {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => res(projects), 300);
    } catch (err) {
      rej();
      console.log('Something went wrong', err);
    }
  });
};
const getProjects = async () => {
  return await handleProjects();
};
const getProject = async name => {
  const response = await handleProjects();
  return response.filter(n => n === name);
};

export { getProjects, getProject };
