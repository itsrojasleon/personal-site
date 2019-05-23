import convertString from './convertString';

const imageBase =
  'https://raw.githubusercontent.com/rojasleon/personal-site-statics/master/png';

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
  },
  {
    image: `${base.url}/gifs-and-stickers.png${base.parameter}`,
    name: 'Gifs and Stickers',
    description: '',
    tecnologies: ['React', 'Redux'],
    url: 'https://search-infinite-gifs.surge.sh/',
    images: [
      `${imageBase}/gifs-and-stickers/1.png`,
      `${imageBase}/gifs-and-stickers/2.png`,
      `${imageBase}/gifs-and-stickers/1.png`,
      `${imageBase}/gifs-and-stickers/2.png`
    ]
  }
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
