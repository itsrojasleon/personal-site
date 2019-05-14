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
    url: 'https://rojasleon.github.io/search-music/'
  },
  {
    image: `${base.url}/emaily.png${base.parameter}`,
    name: 'Emaily',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://server-with-node.herokuapp.com/'
  },
  {
    image: `${base.url}/webpage.png${base.parameter}`,
    name: 'Webpage',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://webpage.now.sh'
  },
  {
    image: `${base.url}/gifs-and-stickers.png${base.parameter}`,
    name: 'Gifs and stickers',
    description: '',
    tecnologies: ['React with Hooks', 'Node', 'MongoDB', 'Redux'],
    url: 'https://search-infinite-gifs.surge.sh/'
  }
];
export default projects;
