import convertString from './convertString';

const base = { url: 'https://i.imgur.com' };
const projects = [
  {
    image: `${base.url}/AEIC0FX.png`,
    name: 'Search Music v2',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://search-music.herokuapp.com/',
  },
  {
    image: `${base.url}/RTtpQWK.png`,
    name: 'Search Music v1',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://rojasleon.github.com/search-music',
  },
  {
    image: `${base.url}/djOtu2N.png`,
    name: 'Emaily',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://server-with-node.herokuapp.com/',
  },
  {
    image: `${base.url}/b7lglYS.png`,
    name: 'Gifs and Stickers',
    description: '',
    tecnologies: ['React', 'Redux'],
    url: 'https://search-infinite-gifs.surge.sh/',
  },
  {
    image: `${base.url}/orU0T50.png`,
    name: 'Search Video',
    description: '',
    tecnologies: ['React', 'Redux', 'Youtube API'],
    url: 'https://search-video.surge.sh/',
  },
];
const handleProjects = () => {
  return new Promise((res, rej) => {
    try {
      res(projects);
    } catch (err) {
      rej();
      console.group();
      console.log('Something went wrong');
      console.log(err.message || err);
      console.groupEnd();
    }
  });
};
const getProjects = async () => {
  return await handleProjects();
};
const getProject = async name => {
  const response = await handleProjects();
  const result = response.filter(n => convertString(n.name) === name);
  return result[0];
};

export { getProjects, getProject };
