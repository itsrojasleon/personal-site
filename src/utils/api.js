import convertString from './convertString';

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
    image: `${base.url}/search-music-v1.png${base.parameter}`,
    name: 'Search Music v1',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://rojasleon.github.com/search-music'
  },
  {
    image: `${base.url}/emaily.png${base.parameter}`,
    name: 'Emaily',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://server-with-node.herokuapp.com/'
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
  return response.filter(n => convertString(n.name) === name);
};

export { getProjects, getProject };
